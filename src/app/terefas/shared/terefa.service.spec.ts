import { TestBed } from '@angular/core/testing';

import { TerefaService } from './terefa.service';

describe('TerefaService', () => {
  let service: TerefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
