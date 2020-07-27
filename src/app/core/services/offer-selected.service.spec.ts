import { TestBed } from '@angular/core/testing';

import { OfferSelectedService } from './offer-selected.service';

describe('OfferSelectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferSelectedService = TestBed.get(OfferSelectedService);
    expect(service).toBeTruthy();
  });
});
