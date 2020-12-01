
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ITeam } from 'src/app/interfaces/team.interface';
import { IPlayer } from '../../interfaces/player.interface';
import { SharedService } from '../shared-module/shared.service';

@Injectable({
  providedIn: 'root'
})
export class TeamDetailsService {
  constructor(private http: HttpClient, private sharedService: SharedService) { }
  leaguesUrl = 'http://localhost:3000/players'
  getTeamDetails(ids: string[]): Observable<IPlayer[]> {
    console.log("enter in service")
    return this.http.post<IPlayer[]>(this.leaguesUrl, { ids })
      .pipe(
        catchError((err) => this.sharedService.handleError(err))
      );
  }



}
