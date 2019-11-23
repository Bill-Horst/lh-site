import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  public perfectCount: number;

  constructor(
    private storageService: StorageService
  ) { 
    this.perfectCount = this.storageService.getPerfectTestCount();
  }

  ngOnInit() {
    
  }

}
