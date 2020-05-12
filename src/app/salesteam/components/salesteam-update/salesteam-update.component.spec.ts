import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamUpdateComponent } from './salesteam-update.component';


describe('SalesTeamUpdateComponent', () => {
  let component: SalesTeamUpdateComponent;
  let fixture: ComponentFixture<SalesTeamUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
