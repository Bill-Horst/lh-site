import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent implements OnInit {

  public progIndicValue: number;
  public progIndicPercentage: number;
  public progTitle: string;

  @Input('progress-indicator-value')
  set progressIndicatorValue(val) {
    this.progIndicValue = val;
  }

  @Input('progress-indicator-percentage')
  set progressIndicatorPercentage(val) {
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
