import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  public perfectCount: string;
  public yetToStart: string;

  constructor() { 
    if (localStorage.getItem('perfectCount') !== null) {
      this.perfectCount = localStorage.getItem('perfectCount');
    } else {
      this.yetToStart = 'I have yet to get a perfect test score.';
    }
  }

  ngOnInit() {
    
  }

}
