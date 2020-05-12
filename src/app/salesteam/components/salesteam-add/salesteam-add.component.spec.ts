import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamAddComponent } from './salesteam-add.component';


describe('SalesTeamAddComponent', () => {
  let component: SalesTeamAddComponent;
  let fixture: ComponentFixture<SalesTeamAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
