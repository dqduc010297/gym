import { FilterRequest } from '../../requests/filter.request';
import { DeviceDetectorService } from 'ngx-device-detector';

export class MyInBodyRq implements FilterRequest {
  skip: number;
  take: number;
  testedDate: Date;

  constructor(deviceDetectorService: DeviceDetectorService) {
    this.take = deviceDetectorService.isDesktop() ? 10 : deviceDetectorService.isTablet ? 6 : 3;
  }
}
