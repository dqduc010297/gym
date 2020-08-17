using AspNetCore.Common.Identity;
using AspNetCore.Common.Messages;
using AspNetCore.Mvc.ActionResults;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;

namespace AspNetCore.Mvc
{
    [Route("api/[controller]")]
    [Authorize]
    public abstract class BaseController : ControllerBase
    {
        [ApiExplorerSettings(IgnoreApi = true)]
        public virtual int GetCurrentUserId()
        {
            return int.Parse(this.User.FindFirst(ClaimTypes.NameIdentifier).Value);
        }
        [ApiExplorerSettings(IgnoreApi = true)]
        public virtual T GetCurrentUserId<T>()
        {
            return (T)Convert.ChangeType(GetCurrentUserId(), typeof(T));
        }
        [ApiExplorerSettings(IgnoreApi = true)]
        public virtual string GetCurrentUserName()
        {
            return this.User.FindFirst(ClaimTypes.Name).Value;
        }
        [ApiExplorerSettings(IgnoreApi = true)]
        public virtual UserIdentity<T> GetCurrentIdentity<T>()
        {
            return new UserIdentity<T>
            {
                Id = GetCurrentUserId<T>(),
                UserName = GetCurrentUserName()
            };
        }
        [ApiExplorerSettings(IgnoreApi = true)]
        public virtual OkObjectResult OkValueObject(object value)
        {
            return Ok(new OkValueModel(value));
        }
        [ApiExplorerSettings(IgnoreApi = true)]
        public new virtual BadRequestObjectResult BadRequest(ModelStateDictionary modelState)
        {
            return base.BadRequest(CreateExceptionMessage(modelState));
        }
        [ApiExplorerSettings(IgnoreApi = true)]
        public virtual BadRequestObjectResult BadRequest(string message)
        {
            return base.BadRequest(new ExceptionMessage(message));
        }
        [ApiExplorerSettings(IgnoreApi = true)]
        private static ExceptionMessage CreateExceptionMessage(ModelStateDictionary modelState)
        {
            var result = new ExceptionMessage();

            result.Details = new List<ExceptionMessage>();

            // Add Error detail
            foreach (var state in modelState)
            {
                var stateError = new ExceptionMessage();

                foreach (var childError in state.Value.Errors)
                {
                    result.Details.Add(new ExceptionMessage
                    {
                        Message = childError.ErrorMessage
                    });
                }
            }

            if (result.Details.Any())
            {
                result.Message = result.Details.First().Message;
            }
            else
            {
                result.Details = null;
            }

            return result;
        }

    }
}