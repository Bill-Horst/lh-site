import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { LinkPageComponent } from './pages/link-page/link-page.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { ProgramsPageComponent } from './pages/programs-page/programs-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';


const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'todo', component: TodoPageComponent },
  { path: 'links', component: LinkPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
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
