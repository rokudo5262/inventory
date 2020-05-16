import { TestBed } from '@angular/core/testing';
import { CodeDetailService } from './code-detail.service';

describe('CodeDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeDetailService = TestBed.get(CodeDetailService);
    expect(service).toBeTruthy();
  });
});
