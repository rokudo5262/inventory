import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodsGroupAddComponent } from './goods-group-add.component';

describe('GoodsGroupAddComponent', () => {
  let component: GoodsGroupAddComponent;
  let fixture: ComponentFixture<GoodsGroupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsGroupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsGroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
