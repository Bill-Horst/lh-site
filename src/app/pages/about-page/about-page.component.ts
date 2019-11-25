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

  constructor(
    private storageService: StorageService
  ) { 
    let perfectTests = this.storageService.getPerfectTestCount();
    this.perfectCount = perfectTests.total;
    this.perfectAdditionCount = perfectTests.addition;
    this.perfectSubtractionCount = perfectTests.subtraction;
    this.perfectMultiplicationCount = perfectTests.multiplication;
    this.perfectDivisionCount = perfectTests.division;
  }

  ngOnInit() {
    
  }

  public clearAllTests() {
    this.storageService.clearAllTests();
  }

}
