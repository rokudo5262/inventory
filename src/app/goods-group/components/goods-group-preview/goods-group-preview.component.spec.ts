import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodsGroupPreviewComponent } from './goods-group-preview.component';

describe('GoodsGroupPreviewComponent', () => {
  let component: GoodsGroupPreviewComponent;
  let fixture: ComponentFixture<GoodsGroupPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsGroupPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsGroupPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
