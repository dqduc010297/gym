import { HttpParams } from '@angular/common/http';

export interface IRequest {
    createParam(): HttpParams;
}
