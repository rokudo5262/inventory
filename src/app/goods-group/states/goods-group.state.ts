import { EntityAdapter, createEntityAdapter, EntityState} from '@ngrx/entity';
import { GoodsGroup } from '@appdata';

export interface GoodsGroupState extends EntityState<GoodsGroup> {
    selectedGoodsGroupId: number | null;
}

// export function sortByName(goodsgroup1: GoodsGroup, goodsgroup2: GoodsGroup): string{
//     return goodsgroup1.id.toLocaleString(goodsgroup2.id);
// }

export const goodsgroupAdapter: EntityAdapter<GoodsGroup> = createEntityAdapter<GoodsGroup>({
    selectId: (goodsgroup: GoodsGroup) => goodsgroup.id,
    sortComparer: false,
});

export const goodsgroupInitialState: GoodsGroupState = goodsgroupAdapter.getInitialState({
    selectedGoodsGroupId: null,
    entities: {
        0: {
            id: 0,
            code: '',
            name: '',
        },
    }
});
