import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, delay } from 'rxjs/operators';
import { LoaderService } from '../../services/core/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const loaderService = this.injector.get(LoaderService);
    let loadingKey = '';
    if (req.params.get('loadingKey')) {
      loadingKey = req.params.get('loadingKey');
      loaderService.addLoadingKey(loadingKey);
    }

    const cloneReq = req.clone({
      url: req.url,
      headers: req.headers,
      params: req.params.delete('loadingKey'),
      body: req.body
    });

    return next.handle(cloneReq).pipe(
      delay(200),
      finalize(() => {
        loaderService.removeloadingKey(loadingKey);
      }),
    );
  }
}
