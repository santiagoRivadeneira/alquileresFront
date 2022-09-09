import { TestBed } from '@angular/core/testing';

import { CargarimagenesService } from './cargarimagenes.service';

describe('CargarimagenesService', () => {
  let service: CargarimagenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarimagenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
