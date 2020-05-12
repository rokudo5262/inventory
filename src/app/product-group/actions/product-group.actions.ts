import { props, createAction } from '@ngrx/store';
import { ProductGroup } from '@appdata';

export enum ProductGroupActionTypes {
    AddProductGroupSuccess = '[Product-Group/API] Add Product Group Success',
    AddProductGroupFailure = '[Product-Group/API] Add Product Group Failure',
}

export const addProductgroupSuccess = createAction(
    ProductGroupActionTypes.AddProductGroupSuccess, // Action Name
    props<{ Productgroups: ProductGroup[]}>(), // action payload type
);

export const addProductgroupFailure = createAction(
    ProductGroupActionTypes.AddProductGroupFailure, // action name
    props<{ errorMsg: string}>(), // action payload type
);
