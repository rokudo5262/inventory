import * as StructureReducer from './structure.reducers';
import * as StructureValueReducer from './structure-value.reducer';
import { StructureState, StructureValueState } from '../states';
import { combineReducers, Action } from '@ngrx/store';

export {
    StructureReducer,
    StructureValueReducer,
};
export const FeatureKey = 'structures';
export interface State {
    [StructureReducer.structuresFeatureKey]: StructureState;
    [StructureValueReducer.structurevaluesFeatureKey]: StructureValueState;
}
export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [StructureReducer.structuresFeatureKey]: StructureReducer.reducer,
        [StructureValueReducer.structurevaluesFeatureKey]: StructureValueReducer.reducer,
    })
    (state, action);
}
