import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeResponsibilityListComponent } from './employee-responsibility-list.component';


describe('EmployeeResponsibilityListComponent', () => {
  let component: EmployeeResponsibilityListComponent;
  let fixture: ComponentFixture<EmployeeResponsibilityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResponsibilityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResponsibilityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
