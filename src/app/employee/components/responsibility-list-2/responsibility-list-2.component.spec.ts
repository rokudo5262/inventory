import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponsibilityList2Component } from './responsibility-list-2.component';


describe('ResponsibilityList2Component', () => {
  let component: ResponsibilityList2Component;
  let fixture: ComponentFixture<ResponsibilityList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsibilityList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibilityList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
