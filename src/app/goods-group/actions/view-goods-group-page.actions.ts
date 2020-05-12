import { createAction, props } from '@ngrx/store';

export const selectGoodsGroup = createAction(
    '[View Goods Group Page] Select Goods Group',
    props<{ id: string }>(),
);
