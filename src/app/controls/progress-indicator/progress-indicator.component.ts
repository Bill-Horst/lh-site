import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent implements OnInit {

  public progIndicValue: number;
  public currLevelIndicValue: number;
  public progIndicPercentage: number;
  public progTitle: string;

  @Input('progress-indicator-value')
  set progressIndicatorValue(val) {
    // console.log(val)
    this.progIndicValue = val;
  }

  @Input('current-level-indicator-value')
  set currentLevelIndicatorValue(val) {
    // console.log(val)
    this.currLevelIndicValue = val;
  }

  @Input('progress-indicator-percentage')
  set progressIndicatorPercentage(val) {
    // console.log(val)
    this.progIndicPercentage = val;
  }

  @Input('progress-title')
  set progressTitle(val) {
    this.progTitle = val;
  }

  constructor() { }

  ngOnInit() {
  }

}
