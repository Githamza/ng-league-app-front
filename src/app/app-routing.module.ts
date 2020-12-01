import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchLeagueComponent } from './components/search-league/search-league.component';

const routes: Routes = [

  {
    path: 'results',
    loadChildren: () => import('./modules/teams-list/teams-list.module').then(m => m.TeamsListModule)
  },
  {
    path: 'teamDetails',
    loadChildren: () => import('./modules/team-details/team-details.module').then(m => m.TeamDetailsModule),
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
