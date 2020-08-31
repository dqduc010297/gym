import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData, DatePipe } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { httpInterceptorProviders } from './interceptors';
import { LayoutComponent } from './layout/layout.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SharedModule } from './share.module';
import { GoalModule } from './modules/goal/goal.module';
import { TimesheetModule } from './modules/timesheet/timesheet.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // IconsProviderModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzDropDownModule,
    NzAvatarModule,
    NzMenuModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    NzModalService,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
