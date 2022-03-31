import { TestBed } from '@angular/core/testing';

import { IndicadoresAdapterService } from './indicadores-adapter.service';

describe('IndicadoresAdapterService', () => {
  let service: IndicadoresAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicadoresAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
