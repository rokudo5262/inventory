import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamBinListComponent } from './salesteambin-list.component';


describe('SalesTeamBinListComponent', () => {
  let component: SalesTeamBinListComponent;
  let fixture: ComponentFixture<SalesTeamBinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamBinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamBinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
