import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ApplyForCustomer } from '@appdata';

export const addApplyForCustomer = createAction(
    '[ApplyForCustomer/API] Add Apply For Customer',
    props<{ applyForCustomer: ApplyForCustomer }>(),
);

export const getApplyForCustomers = createAction(
    '[ApplyForCustomer/API] Get List Apply For Customer',
    // props<{ applyForCustomers: ApplyForCustomer[] }>(),
);

export const getApplyForCustomer = createAction(
    '[ApplyForCustomer/API] Get Selected Apply For Customer',
    props<{ applyForCustomer: ApplyForCustomer}>(),
);

export const updateApplyForCustomer = createAction(
    '[ApplyForCustomer/API] Update Apply For Customer',
    props<{ update: Update<ApplyForCustomer> }>(),
);

export const updateDelete = createAction(
    '[ApplyForCustomer/API] Update Delete',
    props<{ id: number }>(),
);

export const updateDeletes = createAction(
    '[ApplyForCustomer/API] Update Delete Many',
    props<{ ids: number[] }>(),
);
