using FluentValidation;

namespace ApplicationDomain.Identity.Models
{
    public class LoginRq
    {
        public string UserName { set; get; }
        public string Password { set; get; }
        public bool? LockoutOnFailure { set; get; }
    }

    public class LoginRqValidator : AbstractValidator<LoginRq>
    {
        public LoginRqValidator()
        {
            RuleFor(p => p.UserName).NotEmpty();
            RuleFor(p => p.Password).NotEmpty();
        }
    }
}
