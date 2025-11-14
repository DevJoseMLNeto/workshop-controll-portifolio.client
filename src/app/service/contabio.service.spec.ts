import { TestBed } from '@angular/core/testing';

import { ContabioService } from './contabio.service';

describe('ContabioService', () => {
  let service: ContabioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContabioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
