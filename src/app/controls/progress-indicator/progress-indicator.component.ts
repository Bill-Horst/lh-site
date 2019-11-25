import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent implements OnInit {

  public progIndicValue: number;
  public progTitle: string;

  @Input('progress-indicator-value')
  set progressIndicatorValue(val) {
    this.progIndicValue = 100;
    setTimeout(x => {
      this.progIndicValue = val;
    }, 10)
  }

  @Input('progress-title')
  set progressTitle(val) {
    this.progTitle = val;
  }

  public value = 50;

  constructor() { }

  ngOnInit() {
  }

}
