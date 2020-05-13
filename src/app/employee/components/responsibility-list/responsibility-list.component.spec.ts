import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponsibilityListComponent } from './responsibility-list.component';


describe('ResponsibilityListComponent', () => {
  let component: ResponsibilityListComponent;
  let fixture: ComponentFixture<ResponsibilityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsibilityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibilityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
