import { TestBed } from '@angular/core/testing';

import { HoldReservationService } from './hold-reservation.service';

describe('HoldReservationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoldReservationService = TestBed.get(HoldReservationService);
    expect(service).toBeTruthy();
  });
});
