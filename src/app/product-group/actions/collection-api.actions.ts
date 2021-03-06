import { createAction, props } from '@ngrx/store';
import { ProductGroup, ProductGroupDetail } from '@app/@core/data';
import { Update } from '@ngrx/entity';

// Load Product Group
export const loadProductGroupSuccess = createAction(
    '[ProductGroup/API] Load Product Groups Success',
    props<{ productgroups: ProductGroup[]}>(),
);
export const loadProductGroupFailure = createAction(
    '[ProductGroup/API] Load Product Groups Failure',
    props<{ errorMsg: any}>(),
);

// Load Product Group Detail
export const loadProductGroupDetailSuccess = createAction(
    '[ProductGroup/API] Load Product Group Detail Success',
    props<{ productgroupdetail: ProductGroupDetail[]}>(),
);
export const loadProductGroupDetailFailure = createAction(
    '[ProductGroup/API] Load Product Group Detail Failure',
    props<{ errorMsg: any}>(),
);

// Update Product Group
export const updateProductGroupSuccess = createAction(
    '[ProductGroup/API] Update Product Group Success',
    props<{ update: Update<ProductGroup>}>(),
);
export const updateProductGroupFailure = createAction(
    '[ProductGroup/API] Update Product Group Failure',
    props<{ errorMsg: any }>(),
);

// Remove Product Group
export const removeProductGroupSuccess = createAction(
    '[Collection/API] Delete Product Group Success',
    props<{ id: number }>(),
);
export const removeProductGroupFailure = createAction(
    '[Collection/API] Delete Product Group Failure',
    props<{ errorMsg: any }>(),
);
