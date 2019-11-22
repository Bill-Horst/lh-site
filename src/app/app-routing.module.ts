import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LinkPageComponent } from './link-page/link-page.component';
import { GamesPageComponent } from './games-page/games-page.component';
import { ProgramsPageComponent } from './programs-page/programs-page.component';
import { TestPageComponent } from './test-page/test-page.component';


const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'links', component: LinkPageComponent },
  { path: 'tests', component: TestPageComponent },
  { path: 'games', component: GamesPageComponent },
  { path: 'programs', component: ProgramsPageComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
