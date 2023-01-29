import { TestBed } from '@angular/core/testing';

import { VmnewsapiService } from './vmnewsapi.service';

describe('VmnewsapiService', () => {
  let service: VmnewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmnewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
