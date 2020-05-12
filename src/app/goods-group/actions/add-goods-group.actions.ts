import { createAction, props } from '@ngrx/store';
import { GoodsGroup } from '@appdata';

export const addGoodsGroup = createAction(
    '[GoodsGroup/API] Add Goods Groups',
    props<{ addgoodsgroup: GoodsGroup }>(),
);

export const addgoodsgroupSuccess = createAction(
    '[Goods-Group/API] add Goods Group Success',
    props<{ addgoodsgroup: GoodsGroup}>()
);

export const addgoodgroupFailure = createAction(
    '[Goods-Group/API] Add Goods Group Failure',
    props<{ errorMsg: string }>(),
);


