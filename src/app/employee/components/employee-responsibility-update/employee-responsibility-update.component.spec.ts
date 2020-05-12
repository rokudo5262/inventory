import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeResponsibilityUpdateComponent } from './employee-responsibility-update.component';


describe('EmployeeResponsibilityUpdateComponent', () => {
  let component: EmployeeResponsibilityUpdateComponent;
  let fixture: ComponentFixture<EmployeeResponsibilityUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResponsibilityUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResponsibilityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
