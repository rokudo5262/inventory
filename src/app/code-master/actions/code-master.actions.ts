import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { CodeMaster } from '@appdata';

export const addCodeMaster = createAction(
    '[CodeMaster/API] Add Code Master',
    props<{ codeMaster: CodeMaster }>(),
);

export const getCodeMasters = createAction(
    '[CodeMaster/API] Get List Code Master',
    // props<{ codeMasters: CodeMaster[] }>(),
);

export const updateCodeMaster = createAction(
    '[CodeMaster/API] Update Code Master',
    props<{ update: Update<CodeMaster> }>(),
);

export const updateDelete = createAction(
    '[CodeMaster/API] Update Delete',
    props<{ id: number }>(),
);

export const updateDeletes = createAction(
    '[CodeMaster/API] Update Delete Many',
    props<{ ids: number[] }>(),
);

export const updateSystems = createAction(
    '[CodeMaster/API] Update System Many',
    props<{ updates: Update<CodeMaster>[] }>(),
);
