import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../../models/link-model';
import { LinkTypeModel } from '../../models/link-type-model';
import { TestLinkModel } from '../../models/test-link-model';
import { TestParameterModel } from '../../models/test-parameter-model';
import { MatDialog } from '@angular/material';
import { IndividualTestComponent } from '../../controls/individual-test/individual-test.component';

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

  constructor(
    private dialog: MatDialog
  ) {
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
    this.dialog.open(IndividualTestComponent, {
      width: '50%',
      data: new TestParameterModel({
        title: test.title,
        questionCount: test.questionCount,
        subject: test.subject,
        min: test.min,
        max: test.max
      })
    })
  }

  private getMathTests(): Array<TestLinkModel> {
    return [
      {
        title: 'Multiplication Test',
        subtitle: '10 questions on numbers 1 - 10',
        description: 'A test to test your multiplying skills',
        imageLink: 'https://ecdn.teacherspayteachers.com/thumbitem/Multiplication-Timed-Tests-with-Facts-1-10-3198452-1561682486/original-3198452-2.jpg',
        subject: 'multiplication',
        questionCount: 2,
        min: 1,
        max: 10
      },
      {
        title: 'Division Test',
        subtitle: '10 questions on numbers 1 - 9',
        description: 'A test to test your dividing skills',
        imageLink: 'https://ecdn.teacherspayteachers.com/thumbitem/Multiplication-Timed-Tests-with-Facts-1-10-3198452-1561682486/original-3198452-2.jpg',
        subject: 'division',
        questionCount: 2,
        min: 1,
        max: 9
      },
      {
        title: 'Addition Test',
        subtitle: '10 questions on numbers 1 - 10',
        description: 'A test to test your adding skills',
        imageLink: 'https://ecdn.teacherspayteachers.com/thumbitem/Multiplication-Timed-Tests-with-Facts-1-10-3198452-1561682486/original-3198452-2.jpg',
        subject: 'addition',
        questionCount: 2,
        min: 1,
        max: 10
      },
      {
        title: 'Subtraction Test',
        subtitle: '10 questions on numbers 1 - 10',
        description: 'A test to test your subtracting skills',
        imageLink: 'https://ecdn.teacherspayteachers.com/thumbitem/Multiplication-Timed-Tests-with-Facts-1-10-3198452-1561682486/original-3198452-2.jpg',
        subject: 'subtraction',
        questionCount: 2,
        min: 1,
        max: 10
      }
    ];
  }

  private getJapaneseTests(): Array<TestLinkModel> {
    return [
      {
        title: 'Ichinenseino Kanji Test',
        subtitle: 'A Kanji Test for First Graders',
        description: 'See how well you remember first grader kanji',
        imageLink: 'https://i.ytimg.com/vi/uAdC4B4CHxA/hqdefault.jpg',
        subject: 'japanese',
        questionCount: 10
      }
    ];
  }

}
