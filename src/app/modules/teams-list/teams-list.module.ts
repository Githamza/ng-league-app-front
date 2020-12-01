import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsListRoutingModule } from './teams-list-routing.module';
import { TeamsListComponent } from './teams-list.component';
import { SharedModule } from '../shared-module/shared.module';


@NgModule({
  declarations: [TeamsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    TeamsListRoutingModule
  ],
})
export class TeamsListModule { }
