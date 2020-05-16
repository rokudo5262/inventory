import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WarehousePreviewComponent } from './warehouse-preview.component';

describe('WarehousePreviewComponent', () => {
  let component: WarehousePreviewComponent;
  let fixture: ComponentFixture<WarehousePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehousePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehousePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
