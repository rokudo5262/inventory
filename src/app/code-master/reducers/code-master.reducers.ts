import { createReducer, on } from '@ngrx/store';
import { codeMasterInitialState, codeMasterAdapter } from '../states';
import { CodeMasterApiActions, CodeMasterListApiActions } from '../actions';

export const codeMatersFeatureKey = 'codeMasters';

export const reducer = createReducer(
    codeMasterInitialState,
    on(
        CodeMasterListApiActions.loadCodeMasterSuccess,
        (state, { codeMasters }) => {
            codeMasters = codeMasters;
            return codeMasterAdapter.addMany(
                codeMasters, state);
        }
    ),
    on(
        CodeMasterListApiActions.addCodeMasterSuccess,
        (state, { codeMaster }) => codeMasterAdapter.addOne(codeMaster, state)
    ),
    on(
        CodeMasterApiActions.updateCodeMaster,
        CodeMasterListApiActions.updateCodeMasterSuccess,
        (state, { update }) => codeMasterAdapter.updateOne(update, state),
    ),
    on(
        CodeMasterApiActions.updateDelete,
        CodeMasterListApiActions.updateDeleteSuccess,
        (state, { id }) => codeMasterAdapter.removeOne(id, state)
    ),
    on(
        CodeMasterApiActions.updateDeletes,
        CodeMasterListApiActions.updateDeletesSuccess,
        (state, { ids }) => codeMasterAdapter.removeMany(ids, state)
    ),
    on(
        CodeMasterApiActions.updateSystems,
        CodeMasterListApiActions.updateSystemsSuccess,
        (state, { updates }) => codeMasterAdapter.updateMany(updates, state)
    ),
    on(
        CodeMasterApiActions.getCodeMasters,
        (state, { }) => ({ ...state, })
    ),
);
