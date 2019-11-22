import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../models/link-model';
import { LinkTypeModel } from '../models/link-type-model';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  public subjects: Array<LinkTypeModel>;
  
  public mathGames: Array<LinkModel>;
  public japaneseGames: Array<LinkModel>;

  constructor() {
    this.mathGames = this.getMathGames();
    this.japaneseGames = this.getJapaneseGames();

    this.subjects = [
      {
        title: 'Math',
        matIcon: 'plus_one',
        linkTypes: this.mathGames
      },

      {
        title: 'Japanese',
        matIcon: 'translate',
        linkTypes: this.japaneseGames
      },
    ]
  }

  ngOnInit() {
  }

  public runTest(test) {
    console.log(`running test: ${test}`);
  }

  private getMathGames(): Array<LinkModel> {
    return [
      {
        title: 'Math Game Time',
        subtitle: 'A Math Game',
        description: 'A game to help you practice math',
        url: 'http://www.mathgametime.com/math-games',
        imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmuvAr5OJjfFzbhqJOUMsgwiFvF_ErDaFDtAxR-TA34Y6tH4lI'
      }
    ];
  }

  private getJapaneseGames(): Array<LinkModel> {
    return [
      {
        title: 'Japanese Games',
        subtitle: 'A Bunch of Japanese Games',
        description: 'Practice Japanese with these games',
        url: 'http://www.digitaldialects.com/Japanese.htm',
        imageLink: 'https://www.fluentu.com/blog/japanese/wp-content/uploads/sites/6/2017/07/japanese-learning-games-1-e1500305003597.jpg'
      }
    ];
  }

}
