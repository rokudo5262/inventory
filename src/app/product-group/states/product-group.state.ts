import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { ProductGroup } from '@appdata';

export interface ProductGroupState extends EntityState<ProductGroup> {
    selectedProductGroupId: string | null;
}
// export function sortByName(ProductGroup1: ProductGroup, ProductGroup2: ProductGroup): string{
//     return ProductGroup1.id.toLocaleString(ProductGroup2.id);
// }
export const ProductGroupAdapter: EntityAdapter<ProductGroup> = createEntityAdapter<ProductGroup>({
    selectId: (ProductGroup: ProductGroup) => ProductGroup.id,
    sortComparer: false,
});
export const ProductGroupInitialState: ProductGroupState = ProductGroupAdapter.getInitialState({
    selectedProductGroupId: null,
    entities: {
        0: {
            id: 0,
            productGroupCode: '',
            productGroupName: '',
            description: '',
        },
    }
});
