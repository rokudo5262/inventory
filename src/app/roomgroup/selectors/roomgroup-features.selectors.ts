import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectRoomGroupsState = createFeatureSelector<State>(FeatureKey);
