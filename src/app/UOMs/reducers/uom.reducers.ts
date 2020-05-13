import { createReducer, on } from '@ngrx/store';
import { uomInitialState, uomAdapter } from '../states';
import { UomsActions, UomsApiActions } from '../actions';

export const uomsFeatureKey = 'uoms';

export const reducer = createReducer(
    uomInitialState,
    on(
        UomsActions.getUoms,
        UomsApiActions.loadUomsSuccess,
        (state, { uoms }) => {
            uoms = uoms;
            return uomAdapter.addMany(uoms, state);
        }
    ),
    on(
        UomsActions.addUom,
        UomsApiActions.addUomSuccess,
        (state, { uom }) => uomAdapter.addOne(uom, state)
    ),
    on(
        UomsActions.updateUom,
        (state, { update }) => uomAdapter.updateOne(update, state)
    ),
    on(
        UomsActions.getUom,
        UomsApiActions.loadSelectedUomSuccess,
        (state, { uom }) => {
            uom = uom;
            return uomAdapter.addOne(uom, state);
        }
    ),
    on(
        UomsActions.updateDelete,
        UomsApiActions.updateDeleteSuccess,
        (state, { id }) => uomAdapter.removeOne(id, state)
    ),
    on(
        UomsActions.updateDeletes,
        UomsApiActions.updateDeletesSuccess,
        (state, { ids }) => uomAdapter.removeMany(ids, state)
    ),
);
