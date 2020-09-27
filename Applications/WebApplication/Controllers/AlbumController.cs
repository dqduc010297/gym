using System;
using System.Threading.Tasks;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using ApplicationDomain.ThirdParty.Dropbox;
using AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    [AllowAnonymous]
    public class AlbumController : BaseController
    {
        private readonly IAppFileService _appFileService;
        public AlbumController(IAppFileService appFileService)
        {
            this._appFileService = appFileService;
        }
        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetImage()
        {
            return Ok(await this._appFileService.GetAlbum(this.GetCurrentUserId()));
        }
        [Route("")]
        [HttpPut]
        public async Task<IActionResult> ShareImage([FromBody] ImageDTO image)
        {
            //await this._imageService.Share(image);
            return Ok();
        }
    }
}
