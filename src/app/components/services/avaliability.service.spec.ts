import { TestBed } from '@angular/core/testing';

import { AvaliabilityService } from './avaliability.service';

describe('AvaliabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvaliabilityService = TestBed.get(AvaliabilityService);
    expect(service).toBeTruthy();
  });
});
