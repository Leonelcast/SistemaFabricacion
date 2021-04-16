import { TestBed } from '@angular/core/testing';

import { Aggregate2Service } from './aggregate2.service';

describe('Aggregate2Service', () => {
  let service: Aggregate2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Aggregate2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
