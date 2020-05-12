import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamBinDetailComponent } from './salesteambin-detail.component';


describe('SalesTeamBinDetailComponent', () => {
  let component: SalesTeamBinDetailComponent;
  let fixture: ComponentFixture<SalesTeamBinDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamBinDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamBinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
