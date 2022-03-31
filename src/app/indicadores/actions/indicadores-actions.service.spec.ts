import { TestBed } from '@angular/core/testing';

import { IndicadoresActionsService } from './indicadores-actions.service';

describe('IndicadoresActionsService', () => {
  let service: IndicadoresActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicadoresActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
