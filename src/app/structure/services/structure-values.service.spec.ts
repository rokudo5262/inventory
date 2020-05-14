import { TestBed } from '@angular/core/testing';
import { StructureValuesService } from './structure-values.service';


describe('StructureValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StructureValuesService = TestBed.get(StructureValuesService);
    expect(service).toBeTruthy();
  });
});
