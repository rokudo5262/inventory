import { createReducer, on } from '@ngrx/store';
import { CodeDetailApiActions, CodeDetailListApiActions } from '../actions';
import { codeDetailInitialState, codeDetailAdapter } from '../states';

export const codeDetailsFeatureKey = 'codeDetails';

export const reducer = createReducer(
    codeDetailInitialState,
    on(
        CodeDetailApiActions.getCodeDetails,
        CodeDetailListApiActions.loadCodeDetailSuccess,
        (state, { codeDetails }) => {
            codeDetails = codeDetails;
            return codeDetailAdapter.addMany(codeDetails, state);
        }
    ),
    on(
        CodeDetailApiActions.getCodeDetail,
        CodeDetailListApiActions.loadSelectedDetailSuccess,
        (state, { codeDetail }) => {
            codeDetail = codeDetail;
            return codeDetailAdapter.addOne(codeDetail, state);
        }
    ),
    on(
        CodeDetailApiActions.addCodeDetail,
        CodeDetailListApiActions.addCodeDetailSuccess,
        (state, { codeDetail }) => codeDetailAdapter.addOne(codeDetail, state)
    ),
    on(
        CodeDetailApiActions.updateCodeDetail,
        (state, { update }) => codeDetailAdapter.updateOne(update, state),
    ),
    on(
        CodeDetailApiActions.updateDelete,
        CodeDetailListApiActions.updateDeleteSuccess,
        (state, { id }) => codeDetailAdapter.removeOne(id, state)
    ),
    on(
        CodeDetailApiActions.updateDeletes,
        CodeDetailListApiActions.updateDeletesSuccess,
        (state, { ids }) => codeDetailAdapter.removeMany(ids, state)
    ),
    on(
        CodeDetailApiActions.getCodeDetailsBaseoncodeMaster,
        (state, { id }) => ({
            ...state, id: id,
        })
    ),
);
