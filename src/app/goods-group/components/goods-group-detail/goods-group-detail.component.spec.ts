import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodsGroupDetailComponent } from './goods-group-detail.component';

describe('GoodsGroupDetailComponent', () => {
  let component: GoodsGroupDetailComponent;
  let fixture: ComponentFixture<GoodsGroupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsGroupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
