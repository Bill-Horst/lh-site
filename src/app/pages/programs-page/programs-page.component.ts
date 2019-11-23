import { Component, OnInit } from '@angular/core';
import { LinkTypeModel } from '../../models/link-type-model';
import { LinkModel } from '../../models/link-model';

@Component({
  selector: 'app-programs-page',
  templateUrl: './programs-page.component.html',
  styleUrls: ['./programs-page.component.scss']
})
export class ProgramsPageComponent implements OnInit {

  public subjects: Array<LinkTypeModel>;

  public mathLinks: Array<LinkModel>;
  public spellingLinks: Array<LinkModel>;

  constructor() {
    this.mathLinks = this.getMathLinks();
    this.spellingLinks = this.getSpellingLinks();

    this.subjects = [
      {
        title: 'Math',
        matIcon: 'plus_one',
        linkTypes: this.mathLinks
      },

      {
        title: 'Spelling',
        matIcon: 'spellcheck',
        linkTypes: this.spellingLinks
      },
    ]
  }

  ngOnInit() {
  }

  private getMathLinks(): Array<LinkModel> {
    return [
      {
        title: 'Prodigy',
        subtitle: 'Math Game',
        description: 'Learn about math through fightin\' flame neeks',
        url: 'https://play.prodigygame.com/',
        imageLink: 'https://askatechteacher.com/wp-content/uploads/2015/02/prodigy-game-2.jpg'
      }
    ];
  }

  private getSpellingLinks(): Array<LinkModel> {
    return [
      {
        title: 'Spelling City',
        subtitle: 'Practice Spelling',
        description: 'A program to help you practice your spelling words for school',
        url: 'https://www.spellingcity.com/',
        imageLink: 'https://is3-ssl.mzstatic.com/image/thumb/Purple117/v4/9f/4f/75/9f4f75a1-8054-c1cd-d215-16a5def29a1a/pr_source.jpg/643x0w.jpg'
      }
    ];
  }

}
