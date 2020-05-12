import { ProductGroupDetail } from '@app/@core/data';
import {
    EntityState,
    EntityAdapter,
    createEntityAdapter,
} from '@ngrx/entity';

export interface ProductGroupDetailState extends EntityState<ProductGroupDetail> {
    selectedProductGroupDetailId: number | null;
}
export const ProductGroupDetailAdapter: EntityAdapter<ProductGroupDetail> = createEntityAdapter<ProductGroupDetail>({
    selectId: (ProductGroupDetail: ProductGroupDetail) =>
        ProductGroupDetail.id,
    sortComparer: false,
});
export const ProductGroupDetailInitialState: ProductGroupDetailState = ProductGroupDetailAdapter.getInitialState({
    selectedProductGroupDetailId: null,
    entities: {},
});
