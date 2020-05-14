import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StructureSmartTableComponent } from './structure-smart-table.component';


describe('StructureSmartTableComponent', () => {
  let component: StructureSmartTableComponent;
  let fixture: ComponentFixture<StructureSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureSmartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
