import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamBinPreviewComponent } from './salesteambin-preview.component';


describe('SalesTeamBinPreviewComponent', () => {
  let component: SalesTeamBinPreviewComponent;
  let fixture: ComponentFixture<SalesTeamBinPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamBinPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamBinPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
