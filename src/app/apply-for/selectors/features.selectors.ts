import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectApplyForHeadersState = createFeatureSelector<State>(FeatureKey);
