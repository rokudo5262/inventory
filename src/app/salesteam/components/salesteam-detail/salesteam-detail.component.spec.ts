import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamDetailComponent } from './salesteam-detail.component';


describe('SalesTeamDetailComponent', () => {
  let component: SalesTeamDetailComponent;
  let fixture: ComponentFixture<SalesTeamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
