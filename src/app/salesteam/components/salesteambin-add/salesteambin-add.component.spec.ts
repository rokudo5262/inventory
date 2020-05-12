import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamBinAddComponent } from './salesteambin-add.component';


describe('SalesTeamBinAddComponent', () => {
  let component: SalesTeamBinAddComponent;
  let fixture: ComponentFixture<SalesTeamBinAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamBinAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamBinAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
