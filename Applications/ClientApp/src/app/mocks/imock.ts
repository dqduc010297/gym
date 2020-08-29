import { Observable } from 'rxjs';

export interface IMock {
  doMock(param?: any): Observable<any>;
}
