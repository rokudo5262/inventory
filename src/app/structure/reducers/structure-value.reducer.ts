import { createReducer, on } from '@ngrx/store';
import { structurevalueInitialState, structurevalueAdapter } from '../states';
import { StructureValuesApiActions, StructureValuesActions } from '../actions';

export const structurevaluesFeatureKey = 'structurevalues';

export const reducer = createReducer(
    structurevalueInitialState,
    on(
        StructureValuesActions.getStructureValues,
        StructureValuesApiActions.loadStructureValuesSuccess,
        (state, { structurevalues }) => {
            structurevalues = structurevalues.filter(x => x.delete2 === false);
            return structurevalueAdapter.addMany(structurevalues, state);
        }
    ),
    on(
        StructureValuesActions.addStructureValue,
        StructureValuesApiActions.addStructureValueSuccess,
        (state, { structurevalue }) => structurevalueAdapter.addOne(structurevalue, state)
    ),
    on(
        StructureValuesActions.updateStructureValue,
        (state, { update }) => structurevalueAdapter.updateOne(update, state),
    ),
    on(
        StructureValuesActions.deleteStructureValue,
        StructureValuesApiActions.deleteStructureValueSuccess,
        (state, { id }) => structurevalueAdapter.removeOne(id, state)
    ),
    on(
        StructureValuesActions.deleteStructureValues,
        StructureValuesApiActions.deletesStructureValueSuccess,
        (state, { ids }) => structurevalueAdapter.removeMany(ids, state)
    ),
);
