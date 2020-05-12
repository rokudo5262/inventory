import { props, createAction } from '@ngrx/store';
import { GoodsGroup } from '@appdata';

export enum GoodsGroupActionTypes {
    AddGoodsGroupSuccess = '[Goods-Group/API] Add Goods Group Success',
    AddGoodsGroupFailure = '[Goods-Group/API] Add Goods Group Failure',
}

export const addgoodsgroupSuccess = createAction(
    GoodsGroupActionTypes.AddGoodsGroupSuccess, // Action Name
    props<{ goodsgroups: GoodsGroup[]}>(), // action payload type
);

export const addgoodsgroupFailure = createAction(
    GoodsGroupActionTypes.AddGoodsGroupFailure, // action name
    props<{ errorMsg: string}>(), // action payload type
);
