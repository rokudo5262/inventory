import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducer';

export const selectStructuresState = createFeatureSelector<State>(FeatureKey);
