import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamPageComponent } from './salesteam-page.component';


describe('SalesTeamPageComponent', () => {
  let component: SalesTeamPageComponent;
  let fixture: ComponentFixture<SalesTeamPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
