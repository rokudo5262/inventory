import { TestBed } from '@angular/core/testing';
import { SalesTeamBinsService } from './salesteambins.service';


describe('SalesTeamBinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesTeamBinsService = TestBed.get(SalesTeamBinsService);
    expect(service).toBeTruthy();
  });
});
