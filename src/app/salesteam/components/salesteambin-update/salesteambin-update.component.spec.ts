import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamBinUpdateComponent } from './salesteambin-update.component';


describe('SalesTeamBinUpdateComponent', () => {
  let component: SalesTeamBinUpdateComponent;
  let fixture: ComponentFixture<SalesTeamBinUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamBinUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamBinUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
