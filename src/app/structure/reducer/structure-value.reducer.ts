import { createReducer, on } from '@ngrx/store';
import { structurevalueInitialState, structurevalueAdapter } from '../state';
import { StructureValueApiActions, StructureValueCollectionApiActions } from '../actions';

export const structurevaluesFeatureKey = 'structurevalues';

export const reducer = createReducer(
    structurevalueInitialState,
    on(
        StructureValueApiActions.getStructureValues,
        StructureValueCollectionApiActions.loadStructureValuesSuccess,
        (state, { structurevalues }) => {
            structurevalues = structurevalues.filter(x => x.delete2 === false);
            return structurevalueAdapter.addMany(
                structurevalues,
                state);
        }
    ),
    on(
        StructureValueApiActions.addStructureValue,
        StructureValueCollectionApiActions.addStructureValueSuccess,
        (state, { structurevalue }) => structurevalueAdapter.addOne(
            structurevalue,
            state)
    ),
    on(
        StructureValueApiActions.updateStructureValue,
        // StructureValueCollectionApiActions.removeStructureValueSuccess,
        (state, { update }) => structurevalueAdapter.updateOne(
            update,
            state
        ),
    ),
    on(
        StructureValueApiActions.deleteStructureValue,
        StructureValueCollectionApiActions.deleteStructureValueSuccess,
        (state, { id }) => structurevalueAdapter.removeOne(
            id,
            state)
    ),
    on(
        StructureValueApiActions.deleteStructureValues,
        StructureValueCollectionApiActions.deletesStructureValueSuccess,
        (state, { ids }) => structurevalueAdapter.removeMany(
            ids,
            state)
    ),
);
