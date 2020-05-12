import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { StoreInformation } from '@app/@core/data/store';

export interface StoreState extends EntityState<StoreInformation> {
    selectedStoreID: number | null;
}


export function sortByName(store1: StoreInformation, store2: StoreInformation): number {
    return store1.address.localeCompare(store2.address);
}

export const storeAdapter: EntityAdapter<StoreInformation> = createEntityAdapter<StoreInformation>({
    selectId: (storeinformation: StoreInformation) => storeinformation.id,
    sortComparer: sortByName,
});

export const storeInitialState: StoreState = storeAdapter.getInitialState({
    selectedStoreID: null,
    entities: {
        0: {
            id: 0,
            codeStore: 0,
            codeLocation: 0,
            codeStaff: 0,
            closeTime: {
                hours: 0,
                minutes: 0,
            },
            openTime: {
                hours: 0,
                minutes: 0,
            },
            address: '',
        },
    }
});
