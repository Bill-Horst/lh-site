import { Injectable } from '@angular/core';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private perfectTestCount: number;
  private perfectAdditionTestCount: number;
  private perfectSubtractionTestCount: number;
  private perfectMultiplicationTestCount: number;
  private perfectDivisionTestCount: number;
  private userTestLevels: {any};

  constructor() {
    this.setUpLocalStorage();
    this.updatePerfectTestCountProperties();
    this.updateUserTestLevels();
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

  public getUserLevelSet() {
    return this.userTestLevels;
  }

  public incrementPerfectTestCount(subject: string) {
    this.perfectTestCount++;
    localStorage.setItem(Constants.PERFECT_COUNT, this.perfectTestCount.toString());
    this.incrementPerfectSubjectTestCount(subject);
  }

  public clearAllTests() { // method will be deleted when app is up and running (no need to ever delete all except for when dev/testing)
    localStorage.removeItem(Constants.PERFECT_COUNT);
    localStorage.removeItem(Constants.PERFECT_ADDITION_TEST_COUNT);
    localStorage.removeItem(Constants.PERFECT_SUBTRACTION_TEST_COUNT);
    localStorage.removeItem(Constants.PERFECT_MULTIPLICATION_TEST_COUNT);
    localStorage.removeItem(Constants.PERFECT_DIVISION_TEST_COUNT);
    localStorage.removeItem(Constants.USER_TEST_LEVELS);
  }

  private getPerfectTests(subject?: string) {
    if (!subject) {
      return parseInt(localStorage.getItem(Constants.PERFECT_COUNT));
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

  private updateUserTestLevels() {
    this.userTestLevels = JSON.parse(localStorage.getItem(Constants.USER_TEST_LEVELS));
  }

  private setUpLocalStorage() {
    if (!localStorage.getItem(Constants.PERFECT_COUNT)) { localStorage.setItem(Constants.PERFECT_COUNT, "0") };
    if (!localStorage.getItem(Constants.PERFECT_ADDITION_TEST_COUNT)) { localStorage.setItem(Constants.PERFECT_ADDITION_TEST_COUNT, "0") };
    if (!localStorage.getItem(Constants.PERFECT_SUBTRACTION_TEST_COUNT)) { localStorage.setItem(Constants.PERFECT_SUBTRACTION_TEST_COUNT, "0") };
    if (!localStorage.getItem(Constants.PERFECT_MULTIPLICATION_TEST_COUNT)) { localStorage.setItem(Constants.PERFECT_MULTIPLICATION_TEST_COUNT, "0") };
    if (!localStorage.getItem(Constants.PERFECT_DIVISION_TEST_COUNT)) { localStorage.setItem(Constants.PERFECT_DIVISION_TEST_COUNT, "0") };
    if (!localStorage.getItem(Constants.USER_TEST_LEVELS)) {localStorage.setItem(Constants.USER_TEST_LEVELS, '{"addition": 1, "subtraction": 1, "multiplication": 1, "division": 1}')};
  }
}
