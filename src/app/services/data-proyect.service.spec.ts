import { TestBed } from '@angular/core/testing';

import { DataProyectService } from './data-proyect.service';

describe('DataProyectService', () => {
  let service: DataProyectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProyectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
