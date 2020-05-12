import { ProductGroupDetailInitialState } from '../states';
import { createReducer } from '@ngrx/store';

export const ProductGroupDetailFeatureKey = 'Product-group-detail';

export const reducer = createReducer(
    ProductGroupDetailInitialState,
);
