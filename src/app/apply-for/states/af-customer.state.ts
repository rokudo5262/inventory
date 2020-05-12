import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ApplyForCustomer } from '@appdata';

export interface ApplyForCustomerState extends EntityState<ApplyForCustomer> {
    selectedApplyForCustomerID: number | null;
}

export const applyForCustomerAdapter:
    EntityAdapter<ApplyForCustomer> = createEntityAdapter<ApplyForCustomer>({
        selectId: (applyForCustomer: ApplyForCustomer) => applyForCustomer.id,
        sortComparer: false,
    });

export const applyForCustomerInitialState:
    ApplyForCustomerState = applyForCustomerAdapter.getInitialState({
        selectedApplyForCustomerID: null,
    });
