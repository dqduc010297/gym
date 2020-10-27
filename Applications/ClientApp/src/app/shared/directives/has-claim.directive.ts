import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/auth/core/auth.service';

@Directive({
  selector: '[hasClaim]'
})
export class HasClaimDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) { }

  @Input() set hasClaim(claimType: any) {
    if (this.authService.hasClaim(claimType)) {
      // Add template to DOM
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // Remove template from DOM
      this.viewContainer.clear();
    }
  }
}
