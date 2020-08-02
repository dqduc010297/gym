import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntModule } from './ng-zorro-antd.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntModule,
  ],
  declarations: [
  ],
  providers: [

  ],
  exports: [
    CommonModule,
    FormsModule,
    NgZorroAntModule,
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
