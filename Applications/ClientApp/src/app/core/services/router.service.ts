import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class RouterService {
  constructor(private router: Router) {

  }

  navigateToNewUser() {
    this.router.navigate(['wizard/user/0']);
  }

  navigateToUser(id: number) {
    this.router.navigate([`./user/${id}`]);
  }

  navigateToEditUser(id: number) {
    this.router.navigate([`wizard/user/${id}`]);
  }

  navigateToUsers() {
    this.router.navigate(['/user']);
  }

}
