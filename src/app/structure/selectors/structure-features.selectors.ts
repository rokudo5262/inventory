import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectStructuresState = createFeatureSelector<State>(FeatureKey);
