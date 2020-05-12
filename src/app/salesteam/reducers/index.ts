import * as SalesTeamReducer from './salesteam.reducers';
import * as SalesTeamBinReducer from './salesteambin.reducers';

import { combineReducers, Action } from '@ngrx/store';
import { SalesTeamState, SalesTeamBinState } from '../states';

export {
    SalesTeamReducer,
    SalesTeamBinReducer,
};
export const FeatureKey_SalesTeam = 'salesteams';
export const FeatureKey_SalesTeamBin = 'salesteambins';
export interface StateSalesTeam {
    [SalesTeamReducer.salesteamsFeatureKey]: SalesTeamState;
}

export function reducer_salesteam(state: StateSalesTeam | undefined, action: Action) {
    return combineReducers({
        [SalesTeamReducer.salesteamsFeatureKey]: SalesTeamReducer.reducer,
    })(state, action);
}

export interface StateSalesTeamBin {
    [SalesTeamBinReducer.salesteambinsFeatureKey]: SalesTeamBinState;
}
export function reducer_salesteambin(state: StateSalesTeamBin | undefined, action: Action) {
    return combineReducers({
        [SalesTeamBinReducer.salesteambinsFeatureKey]: SalesTeamBinReducer.reducer,
    })(state, action);
}
