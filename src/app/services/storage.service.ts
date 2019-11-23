import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private perfectTestCount: number;

  constructor() {
    this.perfectTestCount = this.getPerfectTests();
  }

  public getPerfectTestCount() {
    return this.perfectTestCount;
  }

  public incrementPerfectTestCount() {
    this.perfectTestCount++;
    localStorage.setItem('perfectCount', this.perfectTestCount.toString());
  }

  private getPerfectTests() {
    if (localStorage.getItem('perfectCount')) {
      return parseInt(localStorage.getItem('perfectCount'));
    } else {
      return 0;
    }
  }
}
