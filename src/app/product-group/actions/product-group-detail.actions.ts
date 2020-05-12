import { createAction, props } from '@ngrx/store';
import { ProductGroupDetail } from '@appdata';
import { Update } from '@ngrx/entity';

export const getProductGroupDetails = createAction(
    '[ProductGroupDetails/API] Get Product Group Detail',
    props<{ productgroupdetails: ProductGroupDetail[]}>(),
);

export const updateProductGroupDetail = createAction(
    '[ProductGroupDetail/API] Update Product Group Detail',
    props<{ update: Update<ProductGroupDetail>}>(),
);

export const removeProductGroupDetail = createAction(
    '[ProductGroupDetail/API] Delete Product Group Detail',
    props<{ id: number}>(),
);

export const getBundleDetail = createAction(
    '[BundleDetail/API] Get Bundle Detail',
    props<{ GroupType: string}>(),
);

export const updateBundleDetail = createAction(
    '[BundleDetail/API] Update Bundle Detail',
    props<{ update: Update<ProductGroupDetail>}>(),
);

export const removeBundleDetail = createAction(
    '[BundleDetail/API] Delete Bundle Detail',
    props<{ id: number }>(),
);

export const getGroupDetail = createAction(
    '[GroupDetail/API] Get Group Detail',
    props<{ GroupType: string}>(),
);

export const updateGroupDetail = createAction(
    '[GroupDetail/API] Update Group Detail',
    props<{ update: Update<ProductGroupDetail>}>(),
);

export const removeGroupDetail = createAction(
    '[GroupDetail/API] Remove Group Detail',
    props<{ id: number}>(),
);

export const getProductDetail = createAction(
    '[ProductDetail/API] Get Product Detail',
    props<{ GroupType: string}>(),
);

export const updateProductDetail = createAction(
    '[ProductDetail/API] Update Product Detail',
    props<{ update: Update<ProductGroupDetail>}>(),
);

export const removeProductDetail = createAction(
    '[ProductDetail/API] Remove Product Detail',
    props<{ id: number}>(),
);
