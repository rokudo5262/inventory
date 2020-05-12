import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Calendar } from '@app/@core/data/calendar';

export interface CalendarState extends EntityState<Calendar> {
    selectedCalendarID: number | null;
}

export const calendarAdapter: EntityAdapter<Calendar> = createEntityAdapter<Calendar>({
    selectId: (calendar: Calendar) => calendar.id,
    sortComparer: false,
});

export const calendarInitialState: CalendarState = calendarAdapter.getInitialState({
    selectedCalendarID: null,
    entities: {
        0: {
            id: 0,
            companyCode: '',
            customerCode: '',
            recurring: '',
            workingDate: '',
            workingDay: '',
            description: '',
            nonWorking: 0,
            status: '',
            delete: 0,
        },
    }
});
