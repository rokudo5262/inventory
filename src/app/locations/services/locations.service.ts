import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILocation } from '@appdata/location';
@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  API_PATH = 'http://localhost:5000/api/locations';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  locationCookiesString = 'LOCATIONS_COOKIES';
  location: ILocation;
  locations: ILocation[];
  constructor(private http: HttpClient) {
  }
  getLocations(): Observable<ILocation[]> {

    return this.http.get<ILocation[]>(this.API_PATH, this.options);
  }
  removeLocation(id: number) {
    return this.http.put<ILocation>(this.API_PATH + '/delete/' + id, this.options);
  }
  updateLocation(changes: Partial<ILocation>) {
    return this.http.put<ILocation>(this.API_PATH + '/' + changes.id, changes, this.options);
  }
  addLocation(location: ILocation) {
    return this.http.post<ILocation>(this.API_PATH, location, this.options);
  }
}
