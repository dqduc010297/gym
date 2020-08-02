import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loadingAPI: string[] = [];
  constructor() { }

  addLoadingAPI(serviceName: string) {
    this.loadingAPI.push(serviceName);
  }

  removeloadingAPI(serviceName: string) {
    const index = this.loadingAPI.indexOf(serviceName);
    if (index > -1) {
      this.loadingAPI.splice(index, 1);
    }
  }

  showLoader(api: string): boolean {
    return this.loadingAPI.indexOf(api) > -1;
  }
}
