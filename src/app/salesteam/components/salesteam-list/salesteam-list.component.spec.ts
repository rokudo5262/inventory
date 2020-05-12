import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamListComponent } from './salesteam-list.component';


describe('SalesTeamListComponent', () => {
  let component: SalesTeamListComponent;
  let fixture: ComponentFixture<SalesTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
