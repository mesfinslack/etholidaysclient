import { TestBed } from '@angular/core/testing';

import { SearchHotelService } from './hotel-search.service';

describe('SearchHotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchHotelService = TestBed.get(SearchHotelService);
    expect(service).toBeTruthy();
  });
});
