import { HttpParams } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { IRequest } from 'src/app/core/requests/irequest';
import { IFilterRequest } from '../../../core/requests/ifilter.request';

export class InBodyRequest extends IRequest implements IFilterRequest {
  skip: number;
  take: number;
  testedDate: Date;

  constructor(deviceDetectorService: DeviceDetectorService) {
    super();
    this.take = deviceDetectorService.isDesktop() ? 10 : deviceDetectorService.isTablet ? 6 : 3;
  }
}
