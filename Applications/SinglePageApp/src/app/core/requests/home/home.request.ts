import { HttpParams } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { IFilterRequest } from '../ifilter.request';
import { IRequest } from '../irequest';
import { ILoadingRequest } from '../loading.request';


export class HomeRequest implements IRequest, IFilterRequest, ILoadingRequest {
  skip = 0;
  take: number;

  constructor(deviceDetectorService: DeviceDetectorService) {
    this.take = deviceDetectorService.isDesktop() ? 8 : deviceDetectorService.isTablet() ? 6 : 4;
  }

  createParam(): HttpParams {
    return new HttpParams().set('request', JSON.stringify(this))
      .set('loadingKey', this.getLoadingKey());
  }

  getLoadingKey(): string {
    return 'HomeRequest';
  }
}
