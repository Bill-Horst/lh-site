import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../models/link-model';
import { LinkTypeModel } from '../models/link-type-model';

@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.scss']
})
export class LinkPageComponent implements OnInit {

  public subjects: Array<LinkTypeModel>;

  public scienceLinks: Array<LinkModel>;
  public mathLinks: Array<LinkModel>;
  public socialStudiesLinks: Array<LinkModel>;

  constructor() {
    this.scienceLinks = this.getScienceLinks();
    this.mathLinks = this.getMathLinks();
    this.socialStudiesLinks = this.getSocialStudiesLinks();

    this.subjects = [
      {
        title: 'Science',
        matIcon: 'image_search',
        linkTypes: this.scienceLinks
      },

      {
        title: 'Math',
        matIcon: 'plus_one',
        linkTypes: this.mathLinks
      },

      {
        title: 'Social Studies',
        matIcon: 'person',
        linkTypes: this.socialStudiesLinks
      },
    ]
  }

  ngOnInit() {
  }

  private getScienceLinks(): Array<LinkModel> {
    return [
      {
        title: 'Scholastic For Kids',
        subtitle: 'Learn about light',
        description: 'Learn all about light',
        url: 'https://www.scholastic.com/teachers/activities/teaching-content/energy-light-and-sound-10-studyjams-interactive-science-activities/',
        imageLink: 'https://www.metuchenlibrary.org/wp-content/uploads/2014/09/scholastic-kids.png'
      },
      {
        title: 'Human Body Facts',
        subtitle: 'Learn about human body',
        description: 'Learn all about human body, yo',
        url: 'https://www.scienceforkidsclub.com/human-body.html',
        imageLink: 'https://i.pinimg.com/originals/b5/1c/de/b51cde37251db20fe4671852a5c4966a.jpg'
      },
      {
        title: 'Human Body Video',
        subtitle: 'Watch video about human body',
        description: 'Teaches you about human body',
        url: 'https://www.youtube.com/watch?v=rg34VwymLXc',
        imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_mBtbssWHgsHSDcIR3QClZJW-zrWeQQeujTqpY4hNSlgYsGFs'
      }
    ]
  }

  private getMathLinks(): Array<LinkModel> {
    return [];
  }

  private getSocialStudiesLinks(): Array<LinkModel> {
    return [];
  }

}
