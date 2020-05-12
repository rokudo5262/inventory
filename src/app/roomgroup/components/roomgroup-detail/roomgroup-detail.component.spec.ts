import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomGroupDetailComponent } from './roomgroup-detail.component';

describe('RoomGroupDetailComponent', () => {
  let component: RoomGroupDetailComponent;
  let fixture: ComponentFixture<RoomGroupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomGroupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
