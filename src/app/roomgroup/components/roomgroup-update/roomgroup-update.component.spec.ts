import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoomGroupUpdateComponent } from './roomgroup-update.component';


describe('RoomGroupUpdateComponent', () => {
  let component: RoomGroupUpdateComponent;
  let fixture: ComponentFixture<RoomGroupUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomGroupUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomGroupUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
