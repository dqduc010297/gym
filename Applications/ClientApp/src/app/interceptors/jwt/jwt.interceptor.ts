import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.authService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
        if (isLoggedIn) {
            req = req.clone({ setHeaders: { Authorization: `Bearer ${currentUser.token}` } });
        }
        return next.handle(req);
    }
}
