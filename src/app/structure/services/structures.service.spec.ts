import { TestBed } from '@angular/core/testing';
import { StructuresService } from './structures.service';


describe('StructuresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StructuresService = TestBed.get(StructuresService);
    expect(service).toBeTruthy();
  });
});
