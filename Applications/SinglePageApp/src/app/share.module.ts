import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntModule } from './ng-zorro-antd.module';
import { UploaderComponent } from './components/uploader/uploader.component';
import { WaitingComponent } from './components/waiting/waiting.component';
import { UserSelectComponent } from './components/user-select/user-select.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntModule,
  ],
  declarations: [
    UploaderComponent,
    WaitingComponent,
    UserSelectComponent
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
    UserSelectComponent
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
