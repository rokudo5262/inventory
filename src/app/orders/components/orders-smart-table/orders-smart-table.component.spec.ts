import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderSmartTableComponent } from './orders-smart-table.component';

describe('OrderSmartTableComponent', () => {
  let component: OrderSmartTableComponent;
  let fixture: ComponentFixture<OrderSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSmartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
