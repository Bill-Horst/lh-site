import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatCardModule, MatTabsModule, MatDialogModule, MatProgressBarModule, MatRadioModule, MatProgressSpinnerModule, MatExpansionModule } from '@angular/material';
import { LinkPageComponent } from './pages/link-page/link-page.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { ProgramsPageComponent } from './pages/programs-page/programs-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { IndividualTestComponent } from './controls/individual-test/individual-test.component';
import { ProgressIndicatorComponent } from './controls/progress-indicator/progress-indicator.component';
import { FormsModule } from '@angular/forms';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutPageComponent,
    LinkPageComponent,
    GamesPageComponent,
    ProgramsPageComponent,
    TestPageComponent,
    IndividualTestComponent,
    ProgressIndicatorComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [IndividualTestComponent]
})
export class AppModule { }
