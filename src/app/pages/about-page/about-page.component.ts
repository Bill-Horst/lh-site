import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  public perfectCount: number;

  public perfectAdditionCount: number;
  public additionTestIndicatorPercentage: number;
  public currentAdditionCountByLevel: number;
  public currentAdditionLevel: number;

  public perfectSubtractionCount: number;
  public subtractionTestIndicatorPercentage: number;
  public currentSubtractionCountByLevel: number;
  public currentSubtractionLevel: number;

  public perfectMultiplicationCount: number;
  public multiplicationTestIndicatorPercentage: number;
  public currentMultiplicationCountByLevel: number;
  public currentMultiplicationLevel: number;

  public perfectDivisionCount: number;
  public divisionTestIndicatorPercentage: number;
  public currentDivisionCountByLevel: number;
  public currentDivisionLevel: number;

  public userLevelSet: any;

  constructor(
    private storageService: StorageService
  ) { 
    let perfectTests = this.storageService.getPerfectTestCount();
    this.perfectCount = perfectTests.total;
    this.userLevelSet = this.storageService.getUserLevelSet();

    this.perfectAdditionCount = perfectTests.addition;
    this.additionTestIndicatorPercentage = this.calculatePercentage('addition');
    this.currentAdditionCountByLevel = this.userLevelSet.addition.currentScore - this.userLevelSet.addition.previousLevelMarker;
    this.currentAdditionLevel = this.userLevelSet.addition.currentLevel;

    this.perfectSubtractionCount = perfectTests.subtraction;
    this.subtractionTestIndicatorPercentage = this.calculatePercentage('subtraction');
    this.currentSubtractionCountByLevel = this.userLevelSet.subtraction.currentScore - this.userLevelSet.subtraction.previousLevelMarker;
    this.currentSubtractionLevel = this.userLevelSet.subtraction.currentLevel;

    this.perfectMultiplicationCount = perfectTests.multiplication;
    this.multiplicationTestIndicatorPercentage = this.calculatePercentage('multiplication');
    this.currentMultiplicationCountByLevel = this.userLevelSet.multiplication.currentScore - this.userLevelSet.multiplication.previousLevelMarker;
    this.currentMultiplicationLevel = this.userLevelSet.multiplication.currentLevel;

    this.perfectDivisionCount = perfectTests.division;
    this.divisionTestIndicatorPercentage = this.calculatePercentage('division');
    this.currentDivisionCountByLevel = this.userLevelSet.division.currentScore - this.userLevelSet.division.previousLevelMarker;
    this.currentDivisionLevel = this.userLevelSet.division.currentLevel;

    // break out all these properties into one single object and do ngFor in the html
  }

  ngOnInit() {

  }

  public clearAllTests() { // temp - to be deleted when app is live
    this.storageService.clearAllTests();
  }

  public seedTestData() { // temp - to be deleted when app is live
    let subjects = ['addition', 'subtraction', 'multiplication', 'division'];
    for (let i = 0; i < 15; i++) {
      this.storageService.incrementPerfectTestCount(subjects[Math.floor(Math.random() * 4)]);
    }
  }

  public calculatePercentage(subject: string) {
    if (subject === 'addition') {
      let set = this.userLevelSet.addition;
      return (set.currentScore - set.previousLevelMarker) / (set.currentNextLevel - set.previousLevelMarker) * 100;
    }
    if (subject === 'subtraction') {
      let set = this.userLevelSet.subtraction;
      return (set.currentScore - set.previousLevelMarker) / (set.currentNextLevel - set.previousLevelMarker) * 100;
    }
    if (subject === 'multiplication') {
      let set = this.userLevelSet.multiplication;
      return (set.currentScore - set.previousLevelMarker) / (set.currentNextLevel - set.previousLevelMarker) * 100;
    }
    if (subject === 'division') {
      let set = this.userLevelSet.division;
      return (set.currentScore - set.previousLevelMarker) / (set.currentNextLevel - set.previousLevelMarker) * 100;
    }
  }

}
