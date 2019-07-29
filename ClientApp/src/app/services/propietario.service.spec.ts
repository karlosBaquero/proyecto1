import { TestBed, inject } from '@angular/core/testing';

import { PropietarioService } from './propietario.service';

describe('PropietarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropietarioService]
    });
  });

  it('should be created', inject([PropietarioService], (service: PropietarioService) => {
    expect(service).toBeTruthy();
  }));
});
