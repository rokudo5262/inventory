import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomGroup } from '@app/@core/data/roomgroup';

@Injectable({
  providedIn: 'root',
})
export class RoomGroupsService {
  API_PATH = 'http://localhost:5000/api/roomgroups';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  roomgroupCookiesString = 'ROOMGROUPS_COOKIES';
  roomgroup: RoomGroup;
  roomgroups: RoomGroup[];
  constructor(
    private http: HttpClient,
  ) { }
  // ----------------------------------------------------------------------------------------
  load_roomgroups(): Observable<RoomGroup[]> {
    return this.http.get<RoomGroup[]>(this.API_PATH, this.options);
  }
  get_roomgroup(): Observable<RoomGroup[]> {
    return this.http.get<RoomGroup[]>(this.API_PATH, this.options);
  }
  delete_roomgroup(id: number) {
    return this.http.delete<RoomGroup>(this.API_PATH + '/' + id, this.options);
  }

  update_roomgroup(changes: Partial<RoomGroup>) {
    return this.http.put<RoomGroup>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  remove_roomgroup(changes: Partial<RoomGroup>) {
    return this.http.put<RoomGroup>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  add_roomgroup(roomgroup: RoomGroup) {
    return this.http.post<RoomGroup>(this.API_PATH, roomgroup, this.options);
  }
}
