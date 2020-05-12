import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamBinDeleteComponent } from './salesteambin-delete.component';


describe('SalesTeamBinDeleteComponent', () => {
  let component: SalesTeamBinDeleteComponent;
  let fixture: ComponentFixture<SalesTeamBinDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamBinDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamBinDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
