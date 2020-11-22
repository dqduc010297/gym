import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() avatarURL: string;
  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
