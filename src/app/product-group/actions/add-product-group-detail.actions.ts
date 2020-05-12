import { createAction, props } from '@ngrx/store';
import { ProductGroupDetail } from '@appdata';
// ADD BUNDLE
export const addBundleDetail = createAction(
    '[BundleDetail/API] Add Bundle Detail',
    props<{ addBundleDetail: ProductGroupDetail }>(),
);
export const addBundleDetailSuccess = createAction(
    '[BundleDetail/API] Add Bundle Detail Success',
    props<{ addBundleDetail: ProductGroupDetail}>()
);
export const addBundleDetailFailure = createAction(
    '[BundleDetail/API] Add Bundle Detail Failure',
    props<{ errorMsg: string }>(),
);
// ADD GROUP DETAIL
export const addGroupDetail = createAction(
    '[GroupDetail/API] Add Bundle Detail',
    props<{ addGroupDetail: ProductGroupDetail }>(),
);
export const addGroupDetailSuccess = createAction(
    '[GroupDetail/API] Add Group Detail Success',
    props<{ addGroupDetail: ProductGroupDetail}>()
);
export const addGroupDetailFailure = createAction(
    '[GroupDetail/API] Add Group Detail Failure',
    props<{ errorMsg: string }>(),
);
// ADD PRODUCT DETAIL
export const addProductDetail = createAction(
    '[ProductDetail/API] Add Product Detail',
    props<{ addProductDetail: ProductGroupDetail }>(),
);
export const addProductDetailSuccess = createAction(
    '[ProductDetail/API] Add Product Detail Success',
    props<{ addProductDetail: ProductGroupDetail}>()
);
export const addProductDetailFailure = createAction(
    '[ProductDetail/API] Add Product Detail Failure',
    props<{ errorMsg: string }>(),
);
