import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectWarehousesState = createFeatureSelector<State>(FeatureKey);
