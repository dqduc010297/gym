import { FilterRequest } from '../../requests/ifilter.request';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ILoadingRequest } from 'src/app/requests/loading.request';

export class MyInBodyRq implements FilterRequest, ILoadingRequest {
  skip: number;
  take: number;
  testedDate: Date;

  constructor(deviceDetectorService: DeviceDetectorService) {
    this.take = deviceDetectorService.isDesktop() ? 10 : deviceDetectorService.isTablet ? 6 : 3;
  }
  getLoadingKey(): string {
    return 'MyInBodyRq';
  }
}
