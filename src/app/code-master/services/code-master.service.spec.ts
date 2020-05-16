import { TestBed } from '@angular/core/testing';
import { CodeMasterService } from './code-master.service';

describe('CodeMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeMasterService = TestBed.get(CodeMasterService);
    expect(service).toBeTruthy();
  });
});
