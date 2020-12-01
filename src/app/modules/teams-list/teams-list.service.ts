import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ITeam } from 'src/app/interfaces/team.interface';
import { SharedService } from '../shared-module/shared.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsListService {
  constructor(private http: HttpClient, private sharedService: SharedService) { }
  leaguesUrl = 'http://localhost:3000/teams'
  getTeamsList(ids: string[]): Observable<ITeam[]> {
    return this.http.post<ITeam[]>(this.leaguesUrl, { ids })
      .pipe(
        catchError((err) => this.sharedService.handleError(err))
      );
  }

}
