import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Warehouse } from '@appdata';

export interface WarehouseState extends EntityState<Warehouse> {
    selectedWarehouseId: string | null;
}

export const warehouseAdapter: EntityAdapter<Warehouse> = createEntityAdapter<Warehouse>({
    selectId: (warehouse: Warehouse) => warehouse.id,
    sortComparer: false,
});

export const warehouseInitialState: WarehouseState = warehouseAdapter.getInitialState({
    selectedWarehouseId: null,
    entities: {
        0: {
            id: 0,
            warehouseName: '',
            locationId: 0,
            warehouseAddress: '',
            managerId: 0,
            warehouseCode: '',
            warehouseStatus: ''
        }
    },
});
