import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestMakerService {

  constructor() { }

  public generateMultiplicationQuestion(min: number = 1, max: number = 10) {
    let currentQuestion;
    let answers = [];

    // generate two numbers
    let number1 = Math.floor(Math.random() * (max - min) + min);
    let number2 = Math.floor(Math.random() * (max - min) + min);

    // generate and assign answer
    let correctAnswer = number1 * number2;

    // assign properties to generated questions
    currentQuestion = `${number1} x ${number2} = ?`;

    // push answer to array
    answers.push({ correct: true, answer: correctAnswer });

    // assign first trick question and push to array
    let trick1 = correctAnswer + number1;
    answers.push({ correct: false, answer: trick1 });

    // assign second trick question and push to array
    let trick2 = correctAnswer + number2;
    answers.push({ correct: false, answer: trick2 });

    // TODO: make this better and work with more than just two trick answers
    if (trick1 === trick2) {answers.pop(); answers.push({correct: false, answer: trick2+1})}

    // shuffle answers
    answers = this.shuffle(answers);

    return {
      question: currentQuestion,
      answers
    }
  }

  private shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

}
