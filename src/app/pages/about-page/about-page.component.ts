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
  public perfectSubtractionCount: number;
  public perfectMultiplicationCount: number;
  public perfectDivisionCount: number;

  public additionTestIndicatorPercentage: number;

  public currentAdditionCountByLevel: number;

  public currentAdditionLevel: number;

  public userLevelSet: any;

  constructor(
    private storageService: StorageService
  ) { 
    let perfectTests = this.storageService.getPerfectTestCount();
    this.perfectCount = perfectTests.total;
    this.perfectAdditionCount = perfectTests.addition;
    this.perfectSubtractionCount = perfectTests.subtraction;
    this.perfectMultiplicationCount = perfectTests.multiplication;
    this.perfectDivisionCount = perfectTests.division;
    this.userLevelSet = this.storageService.getUserLevelSet();
    this.additionTestIndicatorPercentage = this.calculatePercentage('addition');
    this.currentAdditionCountByLevel = this.userLevelSet.addition.currentScore - this.userLevelSet.addition.previousLevelMarker;
    this.currentAdditionLevel = this.userLevelSet.addition.currentLevel;
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
      this.userLevelSet;
      let set = this.userLevelSet.addition;
      return (set.currentScore - set.previousLevelMarker) / (set.currentNextLevel - set.previousLevelMarker) * 100;
    }
  }

}
