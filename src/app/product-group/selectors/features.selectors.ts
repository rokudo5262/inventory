import { createFeatureSelector } from '@ngrx/store';
import { FeatureKey, State } from '../reducers';

export const selectProductGroupState = createFeatureSelector<State>(
    FeatureKey,
);
