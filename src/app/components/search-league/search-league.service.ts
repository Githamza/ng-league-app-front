import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ILeague } from "../../interfaces/league.interface"
import { ITeam } from 'src/app/interfaces/team.interface';
import { SharedService } from 'src/app/modules/shared-module/shared.service';
@Injectable({
  providedIn: 'root'
})
export class SearchLeagueService {
  constructor(private http: HttpClient, private sharedService: SharedService) { }

  leaguesUrl = 'http://localhost:3000/leagues'
  teamsUrl = 'http://localhost:3000/teams'

  getLeaguesList(): Observable<ILeague[]> {
    return this.http.get<ILeague[]>(this.leaguesUrl)
      .pipe(
        catchError((err) => this.sharedService.handleError(err))
      );
  }
  getTeamsList(id: string): Observable<ITeam[]> {
    return this.http.post<ITeam[]>(this.teamsUrl, { id })
      .pipe(
        catchError((err) => this.sharedService.handleError(err))
      );
  }
}
