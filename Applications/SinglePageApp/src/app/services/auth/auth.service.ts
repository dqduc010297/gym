import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/auth/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { LoginUser } from '../../models/auth/login';
import { Router } from '@angular/router';

export const AuthenticationUrl = {
  LoginUrl: `${environment.apiUrl}/auth/login`
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(environment.tokenKey)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(loginUser: LoginUser): Observable<any> {
    return this.http.post<User>(`${environment.apiUrl}/auth/login`, loginUser).pipe(map(
      user => {
        localStorage.setItem(environment.tokenKey, JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }
    ));
  }

  logout() {
    if (localStorage.getItem(environment.tokenKey)) {
      localStorage.removeItem(environment.tokenKey);
    }
    this.currentUserSubject.next(null);
    this.router.navigate(['auth/login']);
  }
}
