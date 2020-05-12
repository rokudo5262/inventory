import { TestBed } from '@angular/core/testing';
import { RoomGroupsService } from './roomgroups.service';


describe('RoomGroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomGroupsService = TestBed.get(RoomGroupsService);
    expect(service).toBeTruthy();
  });
});
