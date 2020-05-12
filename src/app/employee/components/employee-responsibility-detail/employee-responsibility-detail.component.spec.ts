import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeResponsibilityDetailComponent } from './employee-responsibility-detail.component';


describe('EmployeeResponsibilityDetailComponent', () => {
  let component: EmployeeResponsibilityDetailComponent;
  let fixture: ComponentFixture<EmployeeResponsibilityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResponsibilityDetailComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResponsibilityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
