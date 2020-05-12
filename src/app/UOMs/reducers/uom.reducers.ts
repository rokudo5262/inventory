import { createReducer, on } from '@ngrx/store';
import { uomInitialState, uomAdapter } from '../states';
import { UomsApiActions, UomCollectionApiActions } from '../actions';

export const uomsFeatureKey = 'uoms';

export const reducer = createReducer(
    uomInitialState,
    on(
        UomsApiActions.getUoms,
        UomCollectionApiActions.loadUomsSuccess,
        (state, { uoms }) => {
            uoms = uoms;
            return uomAdapter.addMany(uoms, state);
        }
    ),
    on(
        UomsApiActions.addUom,
        UomCollectionApiActions.addUomSuccess,
        (state, { uom }) => uomAdapter.addOne(uom, state)
    ),
    on(
        UomsApiActions.updateUom,
        (state, { update }) => uomAdapter.updateOne(update, state)
    ),
    on(
        UomsApiActions.getUom,
        UomCollectionApiActions.loadSelectedUomSuccess,
        (state, { uom }) => {
            uom = uom;
            return uomAdapter.addOne(uom, state);
        }
    ),
    on(
        UomsApiActions.updateDelete,
        UomCollectionApiActions.updateDeleteSuccess,
        (state, { id }) => uomAdapter.removeOne(id, state)
    ),
    on(
        UomsApiActions.updateDeletes,
        UomCollectionApiActions.updateDeletesSuccess,
        (state, { ids }) => uomAdapter.removeMany(ids, state)
    ),
);
