import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ApplyForSecondaryCustomer } from '@appdata';

export const addApplyForSecondaryCustomer = createAction(
    '[ApplyForSecondaryCustomer/API] Add Apply For SecondaryCustomer',
    props<{ applyForSecondaryCustomer: ApplyForSecondaryCustomer }>(),
);

export const getApplyForSecondaryCustomers = createAction(
    '[ApplyForSecondaryCustomer/API] Get List Apply For SecondaryCustomer',
    // props<{ applyForSecondaryCustomers: ApplyForSecondaryCustomer[] }>(),
);

export const getApplyForSecondaryCustomer = createAction(
    '[ApplyForSecondaryCustomer/API] Get Selected Apply For SecondaryCustomer',
    props<{ applyForSecondaryCustomer: ApplyForSecondaryCustomer}>(),
);

export const updateApplyForSecondaryCustomer = createAction(
    '[ApplyForSecondaryCustomer/API] Update Apply For SecondaryCustomer',
    props<{ update: Update<ApplyForSecondaryCustomer> }>(),
);

export const updateDelete = createAction(
    '[ApplyForSecondaryCustomer/API] Update Delete',
    props<{ id: number }>(),
);

export const updateDeletes = createAction(
    '[ApplyForSecondaryCustomer/API] Update Delete Many',
    props<{ ids: number[] }>(),
);
