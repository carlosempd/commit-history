import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitsComponent } from './components/commits/commits.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'commits', component: CommitsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
