import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  showLoader = false;
  constructor() { }

  // addLoadingAPI(serviceName: string) {
  //   this.loadingAPI.push(serviceName);
  // }

  // removeloadingAPI(serviceName: string) {
  //   const index = this.loadingAPI.indexOf(serviceName);
  //   if (index > -1) {
  //     this.loadingAPI.splice(index, 1);
  //   }
  // }

  // showLoader(api: string): boolean {
  //   return api === this.allPage || this.loadingAPI.indexOf(api) > -1;
  // }

  show() {
    this.showLoader = true;
  }

  hide() {
    this.showLoader = false;
  }
}
