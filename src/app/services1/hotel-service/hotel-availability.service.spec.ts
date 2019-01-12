import { TestBed } from '@angular/core/testing';

import { HotelavailabilityService } from './hotel-availability.service';

describe('HotelavailabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelavailabilityService = TestBed.get(HotelavailabilityService);
    expect(service).toBeTruthy();
  });
});
