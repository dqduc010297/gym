using ApplicationDomain.Common;
using ApplicationDomain.Gym.Model.Responses;
using ApplicationDomain.Identity.Entities;
using ApplicationDomain.Identity.IRepositories;
using ApplicationDomain.Identity.IServices;
using ApplicationDomain.Identity.Models;
using ApplicationDomain.Identity.Models.Requests;
using ApplicationDomain.Identity.Models.Responses;
using AspNetCore.DataBinding.AutoMapper;
using AspNetCore.UnitOfWork;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace ApplicationDomain.Identity.Services
{
    public class UserService : ServiceBase, IUserService
    {
        private readonly UserManager<User> _userManager;
        private readonly IUserRepository _userRepository;
        public UserService(
            IMapper mapper,
            IUnitOfWork uow,
            UserManager<User> userManager,
            IUserRepository userRepository
            ) : base(mapper, uow)
        {
            _userManager = userManager;
            _userRepository = userRepository;
        }

        public async Task<IEnumerable<UserSearchResponse>> Search(UserSearchRequest request)
        {
            var users = await this._userManager.Users
                .Where(p =>
                    p.PhoneNumber.Contains(request.SearchTerm) ||
                    p.SearchName.Contains(StringUtil.GenerateSearchString(request.SearchTerm)))
                .Select(p => new UserSearchResponse()
                {
                    Label = $"{p.PhoneNumber} - {p.Fullname}",
                    Id = p.Id,
                    AvatarURL = p.AvatarURL == null ? AppSettingCommon.GetVariable("DefaultAvatarURL") : $"{p.AvatarURL}?raw=1",
                })
                .ToListAsync();

            return users;
        }
        public async Task<IEnumerable<UserMentionRs>> GetUserMention(string fullname)
        {
            List<UserMentionRs> userMentions = new List<UserMentionRs>();
            var users = await this._userManager.Users
                .Where(p => p.Fullname.Contains(fullname))
                .ToListAsync();
            users.ForEach(u => userMentions.Add(new UserMentionRs()
            {
                Id = u.Id,
                Fullname = u.Fullname,
                AvatarURL = u.AvatarURL ?? AppSettingCommon.GetVariable("DefaultAvatarURL"),
            }));
            return userMentions;
        }

        public async Task<IEnumerable<UserOverviewRs>> GetUserOverviews(FilterRq request)
        {
            return await this._userRepository.GetUserOverview(request);
        }

        public async Task<UserDTO> GetUser(int userId)
        {
            var user = await this._userRepository.GetUsers(p => p.Id == userId);
            return user.FirstOrDefault();
        }

        public async Task<bool> UpdateUser(int userId, UserDTO updatedUser)
        {
            var user = await this._userManager.FindByIdAsync(userId.ToString());
            if (user == null)
            {
                return false;
            }
            this._mapper.Map(updatedUser, user);
            this._userRepository.Update(user);
            int effactRow = await this._uow.SaveChangesAsync();
            if (effactRow == 1)
            {
                return true;
            }
            return false;
        }

        public async Task<int> CreatedUser(UserDTO createdUser)
        {
            User user = new User();
            this._mapper.Map(createdUser, user);
            user.TempPassword = GeneratePassword();
            user.Status = UserStatus.DEACTIVATE;
            var result = await this._userManager.CreateAsync(user, user.TempPassword);
            if (result.Succeeded)
            {
                await this._userManager.AddToRoleAsync(user, createdUser.RoleName);
                await this._uow.SaveChangesAsync();
                return user.Id;
            }
            return 0;
        }

        private string GeneratePassword(int size = 8)
        {
            string[] KEY = new string[4] {
                "abcdefghijklmnopqursuvwxyz",
                "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "123456789",
                @"!@$%^&*()#"
                };
            char[] _password = new char[size];
            System.Random _random = new Random();
            int counter;

            for (counter = 0; counter < size; counter++)
            {
                _password[counter] = KEY[counter % 4][_random.Next(0, KEY[counter % 4].Length - 1)];
            }

            return String.Join(null, _password);

        }
        public async Task<PaginationResponse<UserDTO>> GetUsers(UserListRequest request)
        {
            int totalRows = await this._userRepository.GetUsersSearchByNameOrPhoneCount(request.SearchTerm);
            PaginationResponse<UserDTO> result = new PaginationResponse<UserDTO>(request.PageNumber, totalRows);
            Expression<Func<User, bool>> predicate = p => p.SearchName.Contains(StringUtil.GenerateSearchString(request.SearchTerm))
              || p.PhoneNumber.Contains(request.SearchTerm);
            result.Data = await this._userRepository.GetUsers(predicate, request.SkipCount, request.TakeCount);

            return result;
        }
    }
}