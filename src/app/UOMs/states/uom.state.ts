import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { UOM } from '@app/@core/data';

export interface UomState extends EntityState<UOM> {
    selectedUomID: number | null;
}

export const uomAdapter: EntityAdapter<UOM> = createEntityAdapter<UOM>({
    selectId: (uom: UOM) => uom.id,
    sortComparer: false,
});

export const uomInitialState: UomState = uomAdapter.getInitialState({
    selectedUomID: null,
    entities: {
        0: {
            id: 0,
            companyCode: '',
            uomCode: '',
            uomName: '',
            deleted: 0,
        },
    }
});
