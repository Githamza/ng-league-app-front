import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ITeam } from '../../interfaces/team.interface';
import { SharedService } from '../shared-module/shared.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { TeamsListService } from './teams-list.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  constructor(private sharedService: SharedService,
    private teamListService: TeamsListService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) { }
  teamsList: Observable<ITeam[]> | undefined
  colsNumbr: Number = 12
  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Web
    ]).subscribe(result => {
      console.log({ result })
    })
    this.sharedService.optionSelected.subscribe(data => {
      console.log({ data })
      this.teamsList = this.teamListService.getTeamsList(data)
    })
  }
  showDetails(item: ITeam) {
    console.log("show detail", item)
    this.sharedService.teamSelected.next(item.players)

    this.router.navigate(['/teamDetails']);
  }

}
