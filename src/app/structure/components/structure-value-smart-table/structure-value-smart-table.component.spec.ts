import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StructureValueSmartTableComponent } from './structure-value-smart-table.component';


describe('StructureValueSmartTableComponent', () => {
  let component: StructureValueSmartTableComponent;
  let fixture: ComponentFixture<StructureValueSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureValueSmartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureValueSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
