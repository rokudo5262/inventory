import { TestBed } from '@angular/core/testing';
import { GoodsGroupService } from './goods-group.service';

describe('GoodsGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoodsGroupService = TestBed.get(GoodsGroupService);
    expect(service).toBeTruthy();
  });
});
