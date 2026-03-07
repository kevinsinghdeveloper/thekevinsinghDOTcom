import { TestBed } from '@angular/core/testing';

import { LandingService } from './landing.service';

describe('AuthService', () => {
  let service: LandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
