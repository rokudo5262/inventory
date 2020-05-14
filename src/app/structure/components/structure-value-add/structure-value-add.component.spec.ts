import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StructureValueAddComponent } from './structure-value-add.component';

describe('StructureValueAddComponent', () => {
  let component: StructureValueAddComponent;
  let fixture: ComponentFixture<StructureValueAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureValueAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureValueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
