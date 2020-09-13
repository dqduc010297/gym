using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplicationDomain.Gym.IRepositories;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.ThirdParty.Dropbox;
using AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    [AllowAnonymous]
    public class FileController : BaseController
    {
        private readonly IDropboxService _dropboxService;
        private readonly IImageService _imageService;
        public FileController(IDropboxService dropboxService, IImageService imageService)
        {
            this._dropboxService = dropboxService;
            this._imageService = imageService;
        }

        [HttpPost, DisableRequestSizeLimit]
        [Route("upload")]
        public async Task<IActionResult> Upload([FromForm] IFormFile file)
        {
            string path = await this._dropboxService.Upload(file, this.GetCurrentUserId());
            int imageId = await this._imageService.StorageImage(path, this.GetCurrentUserId());
            return Ok(new UploadImageRs() { IsUploaded = true, Id = imageId, UploadedPath = path });
        }
    }
}
