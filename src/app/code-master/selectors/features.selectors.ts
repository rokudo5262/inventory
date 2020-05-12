import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectCodeMastersState = createFeatureSelector<State>(FeatureKey);
