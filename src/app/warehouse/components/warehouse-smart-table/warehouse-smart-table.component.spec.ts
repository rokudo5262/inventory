import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WarehouseSmartTableComponent } from './warehouse-smart-table.component';

describe('WarehouseSmartTableComponent', () => {
  let component: WarehouseSmartTableComponent;
  let fixture: ComponentFixture<WarehouseSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseSmartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
