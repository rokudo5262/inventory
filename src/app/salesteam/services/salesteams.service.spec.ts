import { TestBed } from '@angular/core/testing';
import { SalesTeamsService } from './salesteams.service';


describe('SalesTeamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesTeamsService = TestBed.get(SalesTeamsService);
    expect(service).toBeTruthy();
  });
});
