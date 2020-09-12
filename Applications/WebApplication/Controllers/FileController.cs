using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        public FileController(IDropboxService dropboxService)
        {
            this._dropboxService = dropboxService;
        }

        [HttpPost, DisableRequestSizeLimit]
        [Route("upload")]
        public async Task<IActionResult> Upload([FromForm] IFormFile file)
        {
            string path = await this._dropboxService.Upload(file);
            return Ok(new UploadImageRs() { isUploaded = true, UploadedPath = path });
        }
    }
}
