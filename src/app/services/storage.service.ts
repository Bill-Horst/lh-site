import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private perfectTestCount: number;
  private perfectAdditionTestCount: number;
  private perfectSubtractionTestCount: number;
  private perfectMultiplicationTestCount: number;
  private perfectDivisionTestCount: number;

  constructor() {
    this.updatePerfectTestCountProperties();
  }

  public getPerfectTestCount() {
    return {
      total: this.perfectTestCount,
      addition: this.perfectAdditionTestCount,
      subtraction: this.perfectSubtractionTestCount,
      multiplication: this.perfectMultiplicationTestCount,
      division: this.perfectDivisionTestCount
    };
  }

  public incrementPerfectTestCount(subject: string) {
    this.perfectTestCount++;
    localStorage.setItem('perfectCount', this.perfectTestCount.toString());
    this.incrementPerfectSubjectTestCount(subject);
  }

  public clearAllTests() {
    localStorage.removeItem('perfectCount');
    localStorage.removeItem('perfectTestCount_addition');
    localStorage.removeItem('perfectTestCount_subtraction');
    localStorage.removeItem('perfectTestCount_multiplication');
    localStorage.removeItem('perfectTestCount_division');
  }

  private getPerfectTests(subject?: string) {
    if (!subject) {
      if (localStorage.getItem('perfectCount')) {
        return parseInt(localStorage.getItem('perfectCount'));
      } else {
        return 0;
      }
    }
    if (subject) {
      if (localStorage.getItem(`perfectTestCount_${subject}`)) {
        return parseInt(localStorage.getItem(`perfectTestCount_${subject}`));
      } else {
        return 0;
      }
    }
  }

  private incrementPerfectSubjectTestCount(subject: string) {
    let perfectSubjectTestCount = localStorage.getItem(`perfectTestCount_${subject}`) ? parseInt(localStorage.getItem(`perfectTestCount_${subject}`)) : 0;
    perfectSubjectTestCount++;
    localStorage.setItem(`perfectTestCount_${subject}`, perfectSubjectTestCount.toString());
    this.updatePerfectTestCountProperties();
  }

  private updatePerfectTestCountProperties() {
    this.perfectTestCount = this.getPerfectTests();
    this.perfectAdditionTestCount = this.getPerfectTests('addition');
    this.perfectSubtractionTestCount = this.getPerfectTests('subtraction');
    this.perfectMultiplicationTestCount = this.getPerfectTests('multiplication');
    this.perfectDivisionTestCount = this.getPerfectTests('division');
  }
}
