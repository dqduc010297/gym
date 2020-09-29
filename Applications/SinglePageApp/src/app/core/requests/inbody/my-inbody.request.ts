import { HttpParams } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { IFilterRequest } from '../ifilter.request';
import { IRequest } from '../irequest';
import { ILoadingRequest } from '../loading.request';

export class InBodyRequest implements IRequest, IFilterRequest, ILoadingRequest {
  skip: number;
  take: number;
  testedDate: Date;

  constructor(deviceDetectorService: DeviceDetectorService) {
    this.take = deviceDetectorService.isDesktop() ? 10 : deviceDetectorService.isTablet ? 6 : 3;
  }

  createParam(): HttpParams {
    return new HttpParams().set('request', JSON.stringify(this))
      .set('loadingKey', this.getLoadingKey());
  }

  getLoadingKey(): string {
    return 'InBodyRequest';
  }
}
