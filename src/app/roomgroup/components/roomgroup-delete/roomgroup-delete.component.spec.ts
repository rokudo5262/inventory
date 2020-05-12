import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoomGroupDeleteComponent } from './roomgroup-delete.component';


describe('RoomGroupDeleteComponent', () => {
  let component: RoomGroupDeleteComponent;
  let fixture: ComponentFixture<RoomGroupDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomGroupDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomGroupDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
