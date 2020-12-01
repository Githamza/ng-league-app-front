import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SearchLeagueService } from './search-league.service';
import { ILeague } from '../../interfaces/league.interface'
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SharedService } from 'src/app/modules/shared-module/shared.service';

@Component({
  selector: 'app-search-league',
  templateUrl: './search-league.component.html',
  styleUrls: ['./search-league.component.scss']
})
export class SearchLeagueComponent implements OnInit {
  constructor(private searchLeagueService: SearchLeagueService,
    private router: Router,
    private sharedService: SharedService,) { }
  myControl = new FormControl();
  options: ILeague[] = [
    {
      _id: '',
      teams: [],
      name: '',
      sport: ''
    }
  ];
  filteredOptions: Observable<ILeague[]> | undefined

  ngOnInit() {
    this.searchLeagueService.getLeaguesList().toPromise().then(data => this.options = data)
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        //startWith(''),
        map((value: string) => this._filter(value))
      );
  }
  selectOption(e: MatAutocompleteSelectedEvent) {
    const item: ILeague = e.option.value;
    console.log("option value", item)
    //this.searchLeagueService.getTeamsList(item.teams[0]).toPromise().then(data => console.log({ data }))
    this.sharedService.optionSelected.next(item.teams)
    this.router.navigate(['/results']);


  }
  displayFn(item: ILeague) {
    console.log({ item })
    return item ? item.name : ''
  }
  private _filter(value: string | ILeague): ILeague[] {
    const filterValue = typeof (value) == 'string' ? value.toLowerCase() : value.name;
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
