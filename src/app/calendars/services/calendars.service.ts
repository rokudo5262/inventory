import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Calendar } from '@app/@core/data/calendar';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class CalendarsService {
    API_PATH = 'http://localhost:5000/api/calendars';
    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'mode': 'no-cors',
        }),
    };
    calendarCookiesString = 'CALENDARS_COOKIES';
    calendar: Calendar;
    calendars: Calendar[];

    constructor(
        private http: HttpClient
    ) {
    }
    getCalendars(): Observable<Calendar[]> {
        return this.http.get<Calendar[]>(this.API_PATH, this.options);
    }
    addCalendar(calendar: Calendar) {
        return this.http.post<Calendar>(this.API_PATH, calendar, this.options);
    }
    updateCalendar(changes: Partial<Calendar>) {
        return this.http.put<Calendar>(this.API_PATH + '/' + changes.id, changes, this.options);
    }
    removeCalendar(id: number) {
        return this.http.delete<Calendar>(this.API_PATH + '/' + id, this.options);
    }
}
