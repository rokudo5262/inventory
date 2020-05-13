import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeResponsibilityPageComponent } from './employee-responsibility-page.component';


describe('EmployeeResponsibilityPageComponent', () => {
  let component: EmployeeResponsibilityPageComponent;
  let fixture: ComponentFixture<EmployeeResponsibilityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResponsibilityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResponsibilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
