import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoomGroupPreviewComponent } from './roomgroup-preview.component';


describe('RoomGroupPreviewComponent', () => {
  let component: RoomGroupPreviewComponent;
  let fixture: ComponentFixture<RoomGroupPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomGroupPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomGroupPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
