import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarReviewComponent } from './calendar-review.component';


describe('CalendarAddComponent', () => {
  let component: CalendarReviewComponent;
  let fixture: ComponentFixture<CalendarReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
