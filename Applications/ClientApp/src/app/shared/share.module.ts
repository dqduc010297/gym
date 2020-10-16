import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UploaderComponent } from './components/uploader/uploader.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { UserSelectComponent } from './components/user-select/user-select.component';
import { UserMentionComponent } from './components/user-mention/user-mention.component';
import { NgZorroAntModule } from './ng-zorro-antd.module';
import { NguiInViewComponent } from './components/ngui-in-view/ngui-in-view.component';


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
    NguiInViewComponent,
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
    NguiInViewComponent,
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
