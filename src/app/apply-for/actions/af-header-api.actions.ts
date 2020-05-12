import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ApplyForHeader } from '@appdata';

export const addApplyForHeader = createAction(
    '[ApplyForHeader/API] Add Apply For Header',
    props<{ applyForHeader: ApplyForHeader }>(),
);

export const getApplyForHeaders = createAction(
    '[ApplyForHeader/API] Get List Apply For Header',
    // props<{ applyForHeaders: ApplyForHeader[] }>(),
);

export const getApplyForHeader = createAction(
    '[ApplyForHeader/API] Get Selected Apply For Header',
    props<{ applyForHeader: ApplyForHeader }>(),
);

export const updateApplyForHeader = createAction(
    '[ApplyForHeader/API] Update Apply For Header',
    props<{ update: Update<ApplyForHeader> }>(),
);

export const updateDelete = createAction(
    '[ApplyForHeader/API] Update Delete',
    props<{ id: number }>(),
);
