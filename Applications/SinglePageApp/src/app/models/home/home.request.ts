import { FilterRequest } from '../../requests/filter.request';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ILoadingRequest } from 'src/app/requests/loading.request';

export class HomeRequest implements FilterRequest, ILoadingRequest {
  skip = 0;
  take: number;
  constructor(deviceDetectorService: DeviceDetectorService) {
    this.take = deviceDetectorService.isDesktop() ? 8 : deviceDetectorService.isTablet() ? 6 : 4;
  }
  getLoadingKey(): string {
    return 'HomeRequest';
  }
}
