import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodsGroupPageComponent } from './goods-group-page.component';

describe('GoodsGroupPageComponent', () => {
  let component: GoodsGroupPageComponent;
  let fixture: ComponentFixture<GoodsGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
