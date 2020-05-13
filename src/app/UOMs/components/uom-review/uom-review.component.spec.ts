import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UomReviewComponent } from './uom-review.component';


describe('UomReviewComponent', () => {
  let component: UomReviewComponent;
  let fixture: ComponentFixture<UomReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UomReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UomReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
