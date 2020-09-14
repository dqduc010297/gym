import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntModule } from './ng-zorro-antd.module';
import { UploaderComponent } from './components/uploader/uploader.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { UserSelectComponent } from './components/user-select/user-select.component';
import { UserMentionComponent } from './components/user-mention/user-mention.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntModule,
  ],
  declarations: [
    UploaderComponent,
    WaitingComponent,
    UserSelectComponent,
    UserMentionComponent,
  ],
  providers: [
    DatePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgZorroAntModule,
    UploaderComponent,
    WaitingComponent,
    UserSelectComponent,
    UserMentionComponent,
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
