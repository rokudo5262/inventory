import { createReducer, on } from '@ngrx/store';
import { codeMasterInitialState, codeMasterAdapter } from '../states';
import { CodeMasterApiActions, CodeMasterActions } from '../actions';

export const codeMatersFeatureKey = 'codeMasters';

export const reducer = createReducer(
    codeMasterInitialState,
    on(
        CodeMasterApiActions.loadCodeMasterSuccess,
        (state, { codeMasters }) => {
            codeMasters = codeMasters;
            return codeMasterAdapter.addMany(
                codeMasters, state);
        }
    ),
    on(
        CodeMasterApiActions.addCodeMasterSuccess,
        (state, { codeMaster }) => codeMasterAdapter.addOne(codeMaster, state)
    ),
    on(
        CodeMasterActions.updateCodeMaster,
        CodeMasterApiActions.updateCodeMasterSuccess,
        (state, { update }) => codeMasterAdapter.updateOne(update, state),
    ),
    on(
        CodeMasterActions.updateDelete,
        CodeMasterApiActions.updateDeleteSuccess,
        (state, { id }) => codeMasterAdapter.removeOne(id, state)
    ),
    on(
        CodeMasterActions.updateDeletes,
        CodeMasterApiActions.updateDeletesSuccess,
        (state, { ids }) => codeMasterAdapter.removeMany(ids, state)
    ),
    on(
        CodeMasterActions.updateSystems,
        CodeMasterApiActions.updateSystemsSuccess,
        (state, { updates }) => codeMasterAdapter.updateMany(updates, state)
    ),
    on(
        CodeMasterActions.getCodeMasters,
        (state, { }) => ({ ...state, })
    ),
);
