import { Observable } from 'rxjs';

export interface Mock {
  doMock(param?: any): Observable<any>;
}
