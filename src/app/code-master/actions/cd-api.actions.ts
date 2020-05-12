import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { CodeDetail } from '@appdata';

export const addCodeDetail = createAction(
    '[CodeDetail/API] Add Code Detail',
    props<{ codeDetail: CodeDetail }>(),
);

export const getCodeDetails = createAction(
    '[CodeDetail/API] Get List Code Detail',
    props<{ codeDetails: CodeDetail[] }>(),
);
export const getCodeDetail = createAction(
    '[CodeDetail/API] Get Selected Code Detail',
    props<{ codeDetail: CodeDetail}>(),
);

export const updateCodeDetail = createAction(
    '[CodeDetail/API] Update Code Detail',
    props<{ update: Update<CodeDetail> }>(),
);

export const updateDelete = createAction(
    '[CodeDetail/API] Update Delete',
    props<{ id: number }>(),
);

export const updateDeletes = createAction(
    '[CodeDetail/API] Update Delete Many',
    props<{ ids: number[] }>(),
);

export const getCodeDetailsBaseoncodeMaster = createAction(
    '[CodeDetail/API] getCodeDetailsBaseoncodeMaster',
    props<{ id: number }>(),
);
