import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { StructureValue } from '@app/@core/data/structure-value';

export interface StructureValueState extends EntityState<StructureValue> {
    selectedStructureValueID: number | null;
}
export const structurevalueAdapter: EntityAdapter<StructureValue> = createEntityAdapter<StructureValue>({
    selectId: (structurevalue: StructureValue) => structurevalue.id,
    sortComparer: false,
});
export const structurevalueInitialState: StructureValueState = structurevalueAdapter.getInitialState({
    selectedStructureValueID: null,
    entities: {
        0: { },
    }
});
