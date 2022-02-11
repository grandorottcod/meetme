import { TestBed } from '@angular/core/testing';

import { MeetmedatabaseService } from './meetmedatabase.service';

describe('MeetmedatabaseService', () => {
  let service: MeetmedatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetmedatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
