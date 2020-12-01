import { TestBed } from '@angular/core/testing';

import { SearchLeagueService } from './search-league.service';

describe('SearchLeagueService', () => {
  let service: SearchLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
