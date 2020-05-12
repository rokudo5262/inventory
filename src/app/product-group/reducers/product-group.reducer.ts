import { ProductGroupInitialState, ProductGroupAdapter } from '../states';
import { createReducer, on } from '@ngrx/store';
import {
    AddProductGroupActions,
    ProductGroupApiActions,
    ProductGroupCollectionApiActions
} from '../actions';

export const ProductGroupFeatureKey = 'Product-group';

export const reducer = createReducer(
    ProductGroupInitialState,
    on(
        ProductGroupApiActions.getProductGroups,
        ProductGroupCollectionApiActions.loadProductGroupSuccess,
        (state, { productgroups }) => ProductGroupAdapter.addMany(productgroups, state)
    ),
    on(AddProductGroupActions.addProductGroup,
        AddProductGroupActions.addProductGroupSuccess,
        (state, { addProductGroup }) => ProductGroupAdapter.addOne(addProductGroup, state)
    ),
    on(
        ProductGroupApiActions.updateProductGroup,
        ProductGroupCollectionApiActions.updateProductGroupSuccess,
        (state, { update }) => ProductGroupAdapter.updateOne(update, state)
    ),
    on(
        ProductGroupApiActions.removeProductGroup,
        ProductGroupCollectionApiActions.removeProductGroupSuccess,
        (state, { id }) => ProductGroupAdapter.removeOne(id, state)
    )
);
