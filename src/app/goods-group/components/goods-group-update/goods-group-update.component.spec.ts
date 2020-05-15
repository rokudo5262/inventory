import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodsGroupUpdateComponent } from './goods-group-update.component';

describe('GoodsGroupUpdateComponent', () => {
  let component: GoodsGroupUpdateComponent;
  let fixture: ComponentFixture<GoodsGroupUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsGroupUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsGroupUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
