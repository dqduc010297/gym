import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploaderComponent } from './components/uploader/uploader.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    UploaderComponent,
  ],
  providers: [
    DatePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    UploaderComponent,
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
