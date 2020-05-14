import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectLocationsState = createFeatureSelector<State>(FeatureKey);
