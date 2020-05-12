import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ILocation } from '@appdata/location';

export interface LocationState extends EntityState<ILocation> {
    selectedLocationID: number | null;
}

export function sortByName(location1: ILocation, location2: ILocation): number {
    return location1.locationCode.localeCompare(location2.locationCode);
}

export const locationAdapter: EntityAdapter<ILocation> = createEntityAdapter<ILocation>({
    selectId: (location: ILocation) => location.id,
    sortComparer: sortByName,
});

export const locationInitialState: LocationState = locationAdapter.getInitialState({
    selectedLocationID: null,
    entities: {
        0: {
            id: 0,
            code: '',
            name: '',
            status: ''
        },
    }
});
