using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using ApplicationDomain.ThirdParty.Dropbox;
using AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    [AllowAnonymous]
    public class ImageController : BaseController
    {
        private readonly IDropboxService _dropboxService;
        private readonly IImageService _imageService;
        public ImageController(IDropboxService dropboxService, IImageService imageService)
        {
            this._dropboxService = dropboxService;
            this._imageService = imageService;
        }
        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetImage()
        {
            try
            {

                return Ok(await this._imageService.GetImage(this.GetCurrentUserId()));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
        [Route("")]
        [HttpPut]
        public async Task<IActionResult> ShareImage([FromBody] ImageDTO image)
        {
            await this._imageService.Share(image);
            return Ok();
        }
    }
}
