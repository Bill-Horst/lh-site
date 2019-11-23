import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TestMakerService } from '../test-maker.service';

@Component({
  selector: 'app-individual-test',
  templateUrl: './individual-test.component.html',
  styleUrls: ['./individual-test.component.scss']
})
export class IndividualTestComponent implements OnInit {

  @ViewChild('reactionMessage', { static: false })
  public ReactionMessage: ElementRef;

  @ViewChild('perfectMessage', { static: false })
  public PerfectMessage: ElementRef;

  public currentQuestion: any;
  public currentQuestionIndex: number = 0;
  public perfectMessage: string;
  public reactionMessage: string;
  public testSet: Array<any>;
  public testState: 'notStarted' | 'inProgress' | 'finished';
  public title: string;

  private questionCount: number;


  constructor(
    private dialogRef: MatDialogRef<IndividualTestComponent>,
    @Inject(MAT_DIALOG_DATA) private passedData: any,
    private testMakerService: TestMakerService
  ) {
    this.title = this.passedData.title;
    this.questionCount = this.passedData.questionCount;

    this.testState = 'notStarted';

    this.testSet = this.generateQuestions(this.questionCount);
    this.currentQuestion = this.testSet[this.currentQuestionIndex];
  }

  ngOnInit() {
  }

  public answeredQuestion(answer): void {

    let correctAnswer = this.currentQuestion.answers.find(ans => ans.correct).answer;

    if (this.currentQuestionIndex + 1 < this.questionCount) {
      this.currentQuestionIndex++;
    } else {
      this.testState = 'finished';
    }

    this.currentQuestion.chosenAnswer = answer;
    this.currentQuestion.correctAnswer = this.currentQuestion.answers.find(ans => ans.correct).answer;
    this.currentQuestion.answeredCorrectly = answer.correct;
    this.reactionMessage = answer.correct ? 'Nice!' : 'Wrong';

    this.currentQuestion = this.testSet[this.currentQuestionIndex];

    if (answer.answer === correctAnswer) {
      this.ReactionMessage.nativeElement.classList.add('reaction-cat');
      setTimeout(() => {
        this.ReactionMessage.nativeElement.classList.remove('reaction-cat');
      }, 1000)
    }

    if (this.testState === 'finished') {
      let wrongAnswers = this.testSet.filter(res => res.answeredCorrectly === false);
      if (wrongAnswers.length === 0) {
        this.perfectMessage = "Nice! Perfect!";
        if (localStorage.getItem('perfectCount') !== null) {
          let pCount = parseInt(localStorage.getItem('perfectCount'));
          pCount++;
          localStorage.setItem('perfectCount', pCount.toString());
        } else {
          (localStorage.setItem('perfectCount', '1'));
        }
      }
    }

  }

  private generateQuestions(qCount: number): Array<any> {
    let set: Array<any> = [];
    for (let i = 0; i < qCount; i++) {
      set.push(this.testMakerService.generateMultiplicationQuestion());
    }
    return set;
  }

}
