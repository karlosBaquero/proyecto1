import { TestBed, inject } from '@angular/core/testing';

import { AbonoService } from './abono.service';

describe('AbonoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbonoService]
    });
  });

  it('should be created', inject([AbonoService], (service: AbonoService) => {
    expect(service).toBeTruthy();
  }));
});
