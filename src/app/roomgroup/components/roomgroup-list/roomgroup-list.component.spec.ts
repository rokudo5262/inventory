import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomGroupListComponent } from './roomgroup-list.component';

describe('RoomGroupListComponent', () => {
  let component: RoomGroupListComponent;
  let fixture: ComponentFixture<RoomGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
