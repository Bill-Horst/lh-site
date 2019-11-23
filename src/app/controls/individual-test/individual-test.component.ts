import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TestMakerService } from '../../services/test-maker.service';
import { StorageService } from 'src/app/services/storage.service';
import { TestParameterModel } from 'src/app/models/test-parameter-model';

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
  public questionData: TestParameterModel;


  constructor(
    private dialogRef: MatDialogRef<IndividualTestComponent>,
    @Inject(MAT_DIALOG_DATA) private passedData: any,
    private testMakerService: TestMakerService,
    private storageService: StorageService
  ) {
    this.questionData = this.passedData;
    this.testState = 'notStarted';
    this.testSet = this.generateQuestions();
    this.currentQuestion = this.testSet[this.currentQuestionIndex];
  }

  ngOnInit() {
  }

  public answeredQuestion(answer): void {

    let correctAnswer = this.currentQuestion.answers.find(ans => ans.correct).answer;

    if (this.currentQuestionIndex + 1 < this.questionData.questionCount) {
      this.currentQuestionIndex++;
    } else {
      this.testState = 'finished';
    }

    this.currentQuestion.chosenAnswer = answer;
    this.currentQuestion.correctAnswer = correctAnswer;
    this.currentQuestion.answeredCorrectly = this.currentQuestion.chosenAnswer.correct;
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
        this.storageService.incrementPerfectTestCount();
      }
    }

  }

  private generateQuestions(): Array<any> {

    let set: Array<any> = [];

    if (this.questionData.subject === 'addition') {
      for (let i = 0; i < this.questionData.questionCount; i++) {
        set.push(this.testMakerService.generateAdditionQuestion(this.questionData.min, this.questionData.max));
      }
    }

    if (this.questionData.subject === 'subtraction') {
      for (let i = 0; i < this.questionData.questionCount; i++) {
        set.push(this.testMakerService.generateSubtractionQuestion(this.questionData.min, this.questionData.max));
      }
    }

    if (this.questionData.subject === 'division') {
      for (let i = 0; i < this.questionData.questionCount; i++) {
        set.push(this.testMakerService.generateDivisionQuestion(this.questionData.max));
      }
    }

    if (this.questionData.subject === 'multiplication') {
      for (let i = 0; i < this.questionData.questionCount; i++) {
        set.push(this.testMakerService.generateMultiplicationQuestion(this.questionData.min, this.questionData.max));
      }
    }

    return set;
  }

}
