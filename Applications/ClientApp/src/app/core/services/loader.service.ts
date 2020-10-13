import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public showLoader = false;
  loadingKey: string[] = [];

  constructor() { }

  addLoadingKey(key: string) {
    this.loadingKey.push(key);
  }

  removeloadingKey(serviceName: string) {
    const index = this.loadingKey.indexOf(serviceName);
    if (index > -1) {
      this.loadingKey.splice(index, 1);
    }
  }

  isShowLoader(key: string): boolean {
    return this.loadingKey.indexOf(key) > -1;
  }

  show() {
    this.showLoader = true;
  }

  hide() {
    this.showLoader = false;
  }
}
