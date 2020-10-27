import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UploaderComponent } from './components/uploader/uploader.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { UserSelectComponent } from './components/user-select/user-select.component';
import { UserMentionComponent } from './components/user-mention/user-mention.component';
import { NgZorroAntModule } from './ng-zorro-antd.module';
import { MediaViewComponent } from './components/media-view/media-view.component';
import { SafePipe } from './pipes/safe.pipe';
import { HasClaimDirective } from './directives/has-claim.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntModule,
  ],
  declarations: [
    SafePipe,

    HasClaimDirective,

    UploaderComponent,
    WaitingComponent,
    UserSelectComponent,
    UserMentionComponent,
    MediaViewComponent,
  ],
  providers: [
    DatePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgZorroAntModule,

    HasClaimDirective,

    UploaderComponent,
    WaitingComponent,
    UserSelectComponent,
    UserMentionComponent,
    MediaViewComponent,
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
