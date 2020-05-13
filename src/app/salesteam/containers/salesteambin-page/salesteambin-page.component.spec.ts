import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamBinPageComponent } from './salesteambin-page.component';


describe('SalesTeamBinPageComponent', () => {
  let component: SalesTeamBinPageComponent;
  let fixture: ComponentFixture<SalesTeamBinPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamBinPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamBinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
