import { FilterRequest } from '../../requests/filter.request';
import { DeviceDetectorService } from 'ngx-device-detector';

export class HomeRequest implements FilterRequest {
    skip: number = 0;
    take: number;
    constructor(deviceDetectorService: DeviceDetectorService) {
        this.take = deviceDetectorService.isDesktop() ? 8 : deviceDetectorService.isTablet() ? 6 : 4;
    }
}