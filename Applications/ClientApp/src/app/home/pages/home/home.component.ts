import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myId: number;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.myId = this.authService.getUserFromLocalStorage().id;
  }

  logout() {
    this.authService.logout();
  }
}
