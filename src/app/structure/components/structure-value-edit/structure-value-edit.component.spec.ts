import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StructureValueEditComponent } from './structure-value-edit.component';


describe('StructureValueEditComponent', () => {
  let component: StructureValueEditComponent;
  let fixture: ComponentFixture<StructureValueEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureValueEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureValueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
