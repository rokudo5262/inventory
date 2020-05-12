import { createAction, props } from '@ngrx/store';

export const selectProductGroup = createAction(
    '[View Product Group Page] Select Product Group',
    props<{ id: number }>(),
);
