import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectCalendarsState = createFeatureSelector<State>(FeatureKey);
