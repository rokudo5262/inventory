export interface WarehouseListState {
    loaded: boolean;
    loading: boolean;
    ids: number[];
}

export const warehouseListInitialState: WarehouseListState = {
    loaded: false,
    loading: false,
    ids: [1, 2, 3],
};
