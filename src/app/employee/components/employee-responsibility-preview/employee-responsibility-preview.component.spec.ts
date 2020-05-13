import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeResponsibilityPreviewComponent } from './employee-responsibiloty-preview.component';


describe('EmployeeResponsibilityPreviewComponent', () => {
  let component: EmployeeResponsibilityPreviewComponent;
  let fixture: ComponentFixture<EmployeeResponsibilityPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeResponsibilityPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeResponsibilityPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
