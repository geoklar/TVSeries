import { TestBed, inject } from '@angular/core/testing';

import { TVApiService } from './tvapi.service';

describe('TVApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TVApiService]
    });
  });

  it('should be created', inject([TVApiService], (service: TVApiService) => {
    expect(service).toBeTruthy();
  }));
});
