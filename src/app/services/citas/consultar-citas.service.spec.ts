import { TestBed } from '@angular/core/testing';

import { ConsultarCitasService } from './consultar-citas.service';

describe('ConsultarCitasService', () => {
  let service: ConsultarCitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarCitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
