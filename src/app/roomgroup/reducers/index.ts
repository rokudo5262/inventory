import * as RoomGroupReducer from './roomgroup.reducers';
import { combineReducers, Action } from '@ngrx/store';
import { RoomGroupState } from '../states/roomgroup.state';

export {
    RoomGroupReducer,
};
export const FeatureKey = 'roomgroups';

export interface State {
    [RoomGroupReducer.roomgroupsFeatureKey]: RoomGroupState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [RoomGroupReducer.roomgroupsFeatureKey]: RoomGroupReducer.reducer,
    })(state, action);
}
