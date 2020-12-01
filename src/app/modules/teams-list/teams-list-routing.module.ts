import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsListComponent } from './teams-list.component'
const routes: Routes = [
  {
    path: '',
    component: TeamsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsListRoutingModule { }
