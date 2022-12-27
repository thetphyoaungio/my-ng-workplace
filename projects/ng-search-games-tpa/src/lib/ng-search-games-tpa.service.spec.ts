import { TestBed } from '@angular/core/testing';

import { NgSearchGamesTpaService } from './ng-search-games-tpa.service';

describe('NgSearchGamesTpaService', () => {
  let service: NgSearchGamesTpaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSearchGamesTpaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
