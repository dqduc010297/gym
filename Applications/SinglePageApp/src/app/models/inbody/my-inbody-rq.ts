import { FilterRequest } from '../core/filter.request';
import { DeviceDetectorService } from 'ngx-device-detector';

export class MyInBodyRq extends FilterRequest {
  testedDate: Date;

  constructor(deviceDetectorService: DeviceDetectorService) {
    super();
    this.skip = 0;
    this.take = deviceDetectorService.isDesktop() ? 10 : deviceDetectorService.isTablet ? 6 : 3;
  }
}
