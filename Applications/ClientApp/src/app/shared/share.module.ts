import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploaderComponent } from './components/uploader/uploader.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { UserSelectComponent } from './components/user-select/user-select.component';
import { UserMentionComponent } from './components/user-mention/user-mention.component';
import { NgZorroAntModule } from './ng-zorro-antd.module';
import { MediaViewComponent } from './components/media-view/media-view.component';
import { SafePipe } from './pipes/safe.pipe';
import { HasClaimDirective } from './directives/has-claim.directive';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SafePipe,

    HasClaimDirective,

    UploaderComponent,
    WaitingComponent,
    UserSelectComponent,
    UserMentionComponent,
    MediaViewComponent,
    ErrorPageComponent,
    ValidationMessageComponent,
  ],
  providers: [
    DatePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgZorroAntModule,
    ReactiveFormsModule,

    HasClaimDirective,

    UploaderComponent,
    WaitingComponent,
    UserSelectComponent,
    UserMentionComponent,
    MediaViewComponent,
    ErrorPageComponent,
    ValidationMessageComponent,
  ],
  entryComponents: [
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
      ],
    };
  }
}
