import { TestBed } from '@angular/core/testing';

import { TeamsListService } from './teams-list.service';

describe('TeamsListService', () => {
  let service: TeamsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
