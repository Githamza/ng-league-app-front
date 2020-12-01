import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamDetailsRoutingModule } from './team-details-routing.module';
import { TeamDetailsComponent } from './team-details.component';
import { SharedModule } from '../shared-module/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [TeamDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    MatListModule,
    MatSnackBarModule,
    TeamDetailsRoutingModule
  ]
})
export class TeamDetailsModule { }
