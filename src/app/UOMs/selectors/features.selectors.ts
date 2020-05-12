import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectUomsState = createFeatureSelector<State>(FeatureKey);
