using Dropbox.Api;
using Dropbox.Api.Files;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationDomain.ThirdParty.Dropbox
{
    public class DropboxService : IDropboxService
    {
        public DropboxService()
        {

        }
        /// <summary>
        /// Generate file name with format ddMMyyyy_hhmmss
        /// </summary>
        /// <returns></returns>
        private string GenerateFileName()
        {
            DateTime now = DateTime.Now;
            return now.Day.ToString() + now.Month.ToString() + now.Year.ToString() + now.Hour.ToString() + now.Minute.ToString() + now.Second.ToString();
        }
        public async Task<string> Upload(IFormFile file)
        {
            var token = "m-CXENCMI5AAAAAAAAAAAU-H0G9AMUJLY_CbWWjeKHyHfk3nq837WcSUecOMmGsz";
            using (DropboxClient dbx = new DropboxClient(token))
            {
                var full = await dbx.Users.GetCurrentAccountAsync();
                var extension = Path.GetExtension(file.FileName);
                var imageName = this.GenerateFileName() + extension;
                var imagePath = @"/" + imageName;
                var fileStream = file.OpenReadStream();
                var upload = await dbx.Files.UploadAsync(imagePath, WriteMode.Overwrite.Instance, false, null, false, null, true, fileStream);
                var shared = await dbx.Sharing.CreateSharedLinkWithSettingsAsync(upload.PathDisplay);
                string s = shared.Url;
                s = s.Replace("?dl=0", "?dl=1");
                return s;
            }
        }
    }
}
