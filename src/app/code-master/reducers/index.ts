import * as CodeMasterReducer from './code-master.reducers';
import * as CodeDetailReducer from './code-detail.reducers';
import { CodeMasterState, CodeDetailState } from '../states';
import { Action, combineReducers } from '@ngrx/store';

export {
    CodeMasterReducer,
    CodeDetailReducer,
};

export const FeatureKey = 'codeMasters';

export interface State {
    [CodeMasterReducer.codeMatersFeatureKey]: CodeMasterState;
    [CodeDetailReducer.codeDetailsFeatureKey]: CodeDetailState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [CodeMasterReducer.codeMatersFeatureKey]: CodeMasterReducer.reducer,
        [CodeDetailReducer.codeDetailsFeatureKey]: CodeDetailReducer.reducer
    })(state, action);
}
