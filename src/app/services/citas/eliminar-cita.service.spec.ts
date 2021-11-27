import { TestBed } from '@angular/core/testing';

import { EliminarCitaService } from './eliminar-cita.service';

describe('EliminarCitaService', () => {
  let service: EliminarCitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarCitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
