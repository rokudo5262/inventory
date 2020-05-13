import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SalesTeamPreviewComponent } from './salesteam-preview.component';


describe('SalesTeamPreviewComponent', () => {
  let component: SalesTeamPreviewComponent;
  let fixture: ComponentFixture<SalesTeamPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
