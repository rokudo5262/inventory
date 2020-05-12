import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeResponsibilityAddComponent } from './employee-responsibility-add.component';


describe('EmployeeResponsibityAddComponent', () => {
  let component: EmployeeResponsibilityAddComponent;
  let fixture: ComponentFixture<EmployeeResponsibilityAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResponsibilityAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResponsibilityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
