import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoomGroupAddComponent } from './Roomgroup-add.component';


describe('RoomGroupAddComponent', () => {
  let component: RoomGroupAddComponent;
  let fixture: ComponentFixture<RoomGroupAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomGroupAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomGroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
