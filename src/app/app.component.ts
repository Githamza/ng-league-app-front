import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { skip } from 'rxjs/internal/operators/skip';
import { SharedService } from './modules/shared-module/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private sharedService: SharedService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.sharedService.error.pipe(skip(1)).subscribe(message => {
      this._snackBar.open(message, '', {
        duration: 2000,
      });
    })
  }

}
