import { createFeatureSelector } from '@ngrx/store';
import { FeatureKey, State } from '../reducers';

export const selectGoodsGroupState = createFeatureSelector<State>(
    FeatureKey,
);
