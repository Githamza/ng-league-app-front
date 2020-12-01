import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ITeam } from 'src/app/interfaces/team.interface';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private http: HttpClient) { }
  optionSelected = new BehaviorSubject<string[]>([]);
  teamSelected = new BehaviorSubject<string[]>([]);
  error = new BehaviorSubject<string>("")

  teamsUrl = 'http://localhost:3000/teams'

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      this.error.next(`An error occurred`)
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      this.error.next(`Backend returned  error code `)

    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
