import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoomGroupPageComponent } from './roomgroup-page.component';


describe('RoomGroupPageComponent', () => {
  let component: RoomGroupPageComponent;
  let fixture: ComponentFixture<RoomGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
