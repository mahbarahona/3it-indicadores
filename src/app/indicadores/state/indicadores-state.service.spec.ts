import { TestBed } from '@angular/core/testing';

import { IndicadoresStateService } from './indicadores-state.service';

describe('IndicadoresStateService', () => {
  let service: IndicadoresStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicadoresStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
