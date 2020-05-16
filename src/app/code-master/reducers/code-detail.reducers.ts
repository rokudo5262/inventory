import { createReducer, on } from '@ngrx/store';
import { CodeDetailApiActions, CodeDetailActions } from '../actions';
import { codeDetailInitialState, codeDetailAdapter } from '../states';

export const codeDetailsFeatureKey = 'codeDetails';

export const reducer = createReducer(
    codeDetailInitialState,
    on(
        CodeDetailActions.getCodeDetails,
        CodeDetailApiActions.loadCodeDetailSuccess,
        (state, { codeDetails }) => {
            codeDetails = codeDetails;
            return codeDetailAdapter.addMany(codeDetails, state);
        }
    ),
    on(
        CodeDetailActions.getCodeDetail,
        CodeDetailApiActions.loadSelectedDetailSuccess,
        (state, { codeDetail }) => {
            codeDetail = codeDetail;
            return codeDetailAdapter.addOne(codeDetail, state);
        }
    ),
    on(
        CodeDetailActions.addCodeDetail,
        CodeDetailApiActions.addCodeDetailSuccess,
        (state, { codeDetail }) => codeDetailAdapter.addOne(codeDetail, state)
    ),
    on(
        CodeDetailActions.updateCodeDetail,
        (state, { update }) => codeDetailAdapter.updateOne(update, state),
    ),
    on(
        CodeDetailActions.updateDelete,
        CodeDetailApiActions.updateDeleteSuccess,
        (state, { id }) => codeDetailAdapter.removeOne(id, state)
    ),
    on(
        CodeDetailActions.updateDeletes,
        CodeDetailApiActions.updateDeletesSuccess,
        (state, { ids }) => codeDetailAdapter.removeMany(ids, state)
    ),
    on(
        CodeDetailActions.getCodeDetailsBaseoncodeMaster,
        (state, { id }) => ({
            ...state, id: id,
        })
    ),
);
