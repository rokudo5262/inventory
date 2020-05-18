import { TestBed } from '@angular/core/testing';
import { ProductGroupDetailService } from './product-group-detail.service';

describe('ProductGroupDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductGroupDetailService = TestBed.get(ProductGroupDetailService);
    expect(service).toBeTruthy();
  });
});
