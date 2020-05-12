import { createAction, props } from '@ngrx/store';
import { ProductGroup } from '@appdata';
import { Update } from '@ngrx/entity';

export const searchProductgroupSuccess = createAction(
    '[ProductGroup/API] Search Success',
    props<{ productgroups: ProductGroup[] }>(),
);
export const searchProductgroupFailure = createAction(
    '[ProductGroup/API] Search Failure',
    props<{ errorMsg: string }>(),
);
export const getProductGroups = createAction(
    '[ProductGroups/API] Get Product Groups',
    props<{ productgroups: ProductGroup[]}>(),
);
export const updateProductGroup = createAction(
    '[ProductGroup/API] Update Product Group',
    props<{ update: Update<ProductGroup>}>(),
);
export const removeProductGroup = createAction(
    '[ProductGroup/API] Delete Product Group',
    props<{ id: number}>(),
);
