import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../models/link-model';
import { LinkTypeModel } from '../models/link-type-model';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  // TODO: CHANGE 'GAMES' TO 'TESTS' AND MAKE MAT DIALOG POP UP WITH TEST WHEN CLICKED

  public subjects: Array<LinkTypeModel>;
  
  public mathTests: Array<LinkModel>;
  public japaneseTests: Array<LinkModel>;

  constructor() {
    this.mathTests = this.getMathTests();
    this.japaneseTests = this.getJapaneseTests();

    this.subjects = [
      {
        title: 'Math',
        matIcon: 'plus_one',
        linkTypes: this.mathTests
      },

      {
        title: 'Japanese',
        matIcon: 'translate',
        linkTypes: this.japaneseTests
      },
    ]
  }

  ngOnInit() {
  }

  public runTest(test) {
    console.log(`running test: ${test}`);
  }

  private getMathTests(): Array<LinkModel> {
    return [
      {
        title: 'Multiplication Test',
        subtitle: 'A Math Test on Multiplication',
        description: 'A test to test your multiplication skills',
        imageLink: 'https://ecdn.teacherspayteachers.com/thumbitem/Multiplication-Timed-Tests-with-Facts-1-10-3198452-1561682486/original-3198452-2.jpg'
      }
    ];
  }

  private getJapaneseTests(): Array<LinkModel> {
    return [
      {
        title: 'Ichinenseino Kanji Test',
        subtitle: 'A Kanji Test for First Graders',
        description: 'See you well you remember first grader kanji',
        imageLink: 'https://i.ytimg.com/vi/uAdC4B4CHxA/hqdefault.jpg'
      }
    ];
  }

}
