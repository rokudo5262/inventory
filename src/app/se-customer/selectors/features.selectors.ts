import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectSecondaryCustomersState = createFeatureSelector<State>(FeatureKey);
