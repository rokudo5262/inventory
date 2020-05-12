import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamDeleteComponent } from './salesteam-delete.component';


describe('SalesTeamDeleteComponent', () => {
  let component: SalesTeamDeleteComponent;
  let fixture: ComponentFixture<SalesTeamDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
