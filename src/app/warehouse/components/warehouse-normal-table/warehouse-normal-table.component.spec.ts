import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WarehouseNormalTableComponent } from './warehouse-normal-table.component';

describe('WarehouseNormalTableComponent', () => {
  let component: WarehouseNormalTableComponent;
  let fixture: ComponentFixture<WarehouseNormalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseNormalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseNormalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
