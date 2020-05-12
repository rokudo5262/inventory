import { createAction, props } from '@ngrx/store';
import { ProductGroup } from '@appdata';

export const addProductGroup = createAction(
    '[ProductGroup/API] Add Product Groups',
    props<{ addProductGroup: ProductGroup }>(),
);

export const addProductGroupSuccess = createAction(
    '[Product-Group/API] add Product Group Success',
    props<{ addProductGroup: ProductGroup}>()
);

export const addgoodgroupFailure = createAction(
    '[Product-Group/API] Add Product Group Failure',
    props<{ errorMsg: string }>(),
);


