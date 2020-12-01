import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../shared-module/shared.service';
import { TeamDetailsService } from './team-details.service';
import { IPlayer } from "../../interfaces/player.interface"
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  constructor(private sharedService: SharedService, private teamDetail: TeamDetailsService, private _location: Location) { }
  teamDetails: Observable<IPlayer[]> | undefined

  ngOnInit(): void {
    console.log("component team detail")
    this.sharedService.teamSelected.subscribe(data => {
      this.teamDetails = this.teamDetail.getTeamDetails(data)
    })
  }
  back() {
    this._location.back();

  }

}
