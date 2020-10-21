using System.Threading.Tasks;
using ApplicationDomain.Gym.IServices;
using ApplicationDomain.Gym.Model;
using ApplicationDomain.ThirdParty.Dropbox;
using AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    public class FileController : BaseController
    {
        private readonly IDropboxService _dropboxService;
        private readonly IAppFileService _appFileService;
        public FileController(IDropboxService dropboxService, IAppFileService appFileService)
        {
            this._dropboxService = dropboxService;
            this._appFileService = appFileService;
        }

        [HttpPost, DisableRequestSizeLimit]
        [Route("storage")]
        public async Task<IActionResult> Storage([FromForm] IFormFile file)
        {
            string path = await this._dropboxService.Upload(file, this.GetCurrentUserId());
            int appFileId = await this._appFileService.Storage(path, file.ContentType);
            return Ok(new UploadedFile() { IsUploaded = true, Id = appFileId, UploadedPath = $"{path}?raw=1", ContentType = file.ContentType });
        }

        [HttpPost, DisableRequestSizeLimit]
        [Route("upload")]
        public async Task<IActionResult> Upload([FromForm] IFormFile file)
        {
            string path = await this._dropboxService.Upload(file, this.GetCurrentUserId());
            return Ok(new UploadedFile() { IsUploaded = true, Id = 0, UploadedPath = $"{path}?raw=1", ContentType = file.ContentType });
        }
       
        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetAppFile(int id)
        {
            return Ok(await this._appFileService.GetAppFileById(id));
        }

        [Route("share")]
        [HttpPut]
        public async Task<IActionResult> ShareMediaFile([FromBody] MediaFile mediaFile)
        {
            await this._appFileService.ShareMediaFile(mediaFile);
            return Ok();
        }
    }
}
