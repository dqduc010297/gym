import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/core/auth.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  isInitPage = true;
  currentRole: string;

  constructor(
    public loaderService: LoaderService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  selectedUser(event) {
    this.isInitPage = false;
    this.redirectiToForm(event);
  }

  createUser() {
    this.isInitPage = false;
    this.redirectiToForm(0);
  }

  redirectiToForm(id: number) {
    this.router.navigate([`user/${id}`]);
  }
}
