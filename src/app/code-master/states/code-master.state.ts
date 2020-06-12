import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { CodeMaster } from '@appdata';

export interface CodeMasterState extends EntityState<CodeMaster> {
    selectedCodeMasterID: number | null;
}

export const codeMasterAdapter: EntityAdapter<CodeMaster> = createEntityAdapter<CodeMaster>({
    selectId: (codeMaster: CodeMaster) => codeMaster.id,
    sortComparer: false,
});

export const codeMasterInitialState: CodeMasterState = codeMasterAdapter.getInitialState({
    selectedCodeMasterID: null,
    entities: {
        0: {
        }
    }
});
