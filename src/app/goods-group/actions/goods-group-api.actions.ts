import { createAction, props } from '@ngrx/store';
import { GoodsGroup } from '@appdata';
import { Update } from '@ngrx/entity';

// search Goods Group
export const searchgoodsgroupSuccess = createAction(
    '[GoodsGroup/API] Search Goods Group Success',
    props<{ goodsgroups: GoodsGroup[] }>(),
);
export const searchgoodsgroupFailure = createAction(
    '[GoodsGroup/API] Search Goods Group Failure',
    props<{ errorMsg: string }>(),
);
// add Goods Group
export const addgoodsgroupSuccess = createAction(
    '[Goods-Group/API] Add Goods Group Success',
    props<{ addgoodsgroup: GoodsGroup }>()
);
export const addgoodgroupFailure = createAction(
    '[Goods-Group/API] Add Goods Group Failure',
    props<{ errorMsg: string }>(),
);
// Load Goods Group
export const loadGoodsGroupSuccess = createAction(
    '[Goods-Group/API] Load Goods Groups Success',
    props<{ goodsgroups: GoodsGroup[] }>(),
);
export const loadGoodsGroupFailure = createAction(
    '[Goods-Group/API] Load Goods Groups Failure',
    props<{ errorMsg: any }>(),
);
// Update Goods Group
export const updateGoodsGroupSuccess = createAction(
    '[Goods-Group/API] Update Goods Group Success',
    props<{ update: Update<GoodsGroup> }>(),
);
export const updateGoodsGroupFailure = createAction(
    '[Goods-Group/API] Update Goods Group Failure',
    props<{ errorMsg: any }>(),
);
// Remove Goods Group
export const removeGoodsGroupSuccess = createAction(
    '[Goods-Group/API] Delete Goods Group Success',
    props<{ id: number }>(),
);
export const removeGoodsGroupFailure = createAction(
    '[Goods-Group/API] Delete Goods Group Failure',
    props<{ errorMsg: any }>(),
);
