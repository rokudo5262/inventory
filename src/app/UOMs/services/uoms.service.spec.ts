import { TestBed } from '@angular/core/testing';
import { UomsService } from './uoms.service';

describe('UomsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UomsService = TestBed.get(UomsService);
    expect(service).toBeTruthy();
  });
});
