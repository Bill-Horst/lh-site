import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatCardModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { LinkPageComponent } from './pages/link-page/link-page.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { ProgramsPageComponent } from './pages/programs-page/programs-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { IndividualTestComponent } from './controls/individual-test/individual-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutPageComponent,
    LinkPageComponent,
    GamesPageComponent,
    ProgramsPageComponent,
    TestPageComponent,
    IndividualTestComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [IndividualTestComponent]
})
export class AppModule { }
