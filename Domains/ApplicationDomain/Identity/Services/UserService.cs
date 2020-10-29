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

        public async Task<IEnumerable<UserSearchRs>> GetUserSearch(UserSearchRq searchRq)
        {
            var users = await this._userManager.Users
                .Where(p => p.PhoneNumber.Contains(searchRq.PhoneNumber) || p.Fullname.Contains(searchRq.Fullname))
                //.Skip(searchRq.Skip).Take(searchRq.Take)
                .Select(p => new UserSearchRs()
                {
                    Fullname = p.Fullname,
                    PhoneNumber = p.PhoneNumber,
                    Id = p.Id
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

        public async Task<UserDTO> GetUserInfo(int userId)
        {
            return await this._userRepository
                .GetEntitiesQueryableAsync()
                .MapQueryTo<UserDTO>(this._mapper)
                .Where(p => p.Id == userId)
                .FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateUserInfo(int userId, UserDTO updatedUser)
        {
            try
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
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<int> CreatedUser(UserDTO createdUser)
        {
            try
            {

                User user = new User();
                this._mapper.Map(createdUser, user);
                user.TempPassword = GeneratePassword();
                user.Status = UserStatus.DEACTIVATE;
                var result = await this._userManager.CreateAsync(user, user.TempPassword);
                if (result.Succeeded)
                {
                    await this._userManager.AddToRoleAsync(user, RoleName.MEMBER.ToString());
                    await this._uow.SaveChangesAsync();
                    return user.Id;
                }
                return 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
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
        public async Task<PaginationResponse<UserDTO>> GetUsers(PaginationRequest request)
        {
            PaginationResponse<UserDTO> result = new PaginationResponse<UserDTO>();

            result.PageNumber = request.PageNumber;
            result.PageCount = await this._userManager.Users.CountAsync();
            if(result.PageCount > 0)
            {
                result.Data = await this._userManager
                    .Users
                    .Skip(request.SkipCount).Take(request.TakeCount)
                    .MapQueryTo<UserDTO>(this._mapper)
                    .ToListAsync();
            }
            return result;
        }
    }
}