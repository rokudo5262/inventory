import { TestBed } from '@angular/core/testing';
import { EmployeeResponsibilitiesService } from './employeeresponsibilities.service';


describe('EmployeeResponsibilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeResponsibilitiesService = TestBed.get(EmployeeResponsibilitiesService);
    expect(service).toBeTruthy();
  });
});
