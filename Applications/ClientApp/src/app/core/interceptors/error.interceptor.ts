import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/core/auth.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private modalService: NzModalService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET') {
      return next.handle(req).pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          switch (error.status) {
            case 401:
              this.modalService.error({
                nzTitle: 'Lỗi đăng nhập',
                nzContent: 'Vui lòng đăng nhập lại.'
              });
              this.authService.logout();
              // tslint:disable-next-line: deprecation
              location.reload(true);
              break;
            case 500:
              this.modalService.error({
                nzTitle: 'Hệ thống đang gặp lỗi',
                nzContent: 'Vui lòng thử lại sau.'
              });
              break;
            default:
              const err = error.error.message || error.statusText;
              return throwError(err);
          }
        })
      );
    }
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            this.modalService.error({
              nzTitle: 'Lỗi đăng nhập',
              nzContent: 'Vui lòng đăng nhập lại.'
            });
            this.authService.logout();
            // tslint:disable-next-line: deprecation
            location.reload(true);
            break;
          case 500:
            this.modalService.error({
              nzTitle: 'Hệ thống đang gặp lỗi',
              nzContent: 'Vui lòng thử lại sau.'
            });
            break;
          default:
            const err = error.error.message || error.statusText;
            return throwError(err);
        }
      })
    );
  }
}
