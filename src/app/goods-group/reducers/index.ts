import * as GoodsGroupReducer from './goods-group.reducer';
import { GoodsGroupState } from '../states';
import { combineReducers, Action } from '@ngrx/store';

export {
    GoodsGroupReducer,
};
export const FeatureKey = 'goods-group';
export interface State {
    [GoodsGroupReducer.goodsgroupFeatureKey]: GoodsGroupState;
}
export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [GoodsGroupReducer.goodsgroupFeatureKey]: GoodsGroupReducer.reducer,
    })(state, action);
}
