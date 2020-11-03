import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/core/auth.service';
import { LoaderService } from 'src/app/core/services/loader.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  isLogin = false;

  constructor(
    public authService: AuthService,
    public loaderService: LoaderService,
  ) {
  }

  ngOnInit(): void {
    // get version storage
    const appVersion = localStorage.getItem('appVersion');
    if (appVersion) {
      if (appVersion === environment.appVersion) {
        return;
      }
    }
    this.logout();
  }

  logout() {
    this.authService.logout();
  }
}
