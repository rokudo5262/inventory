import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ApplyForSecondaryCustomer } from '@appdata';

export interface ApplyForSecondaryCustomerState extends EntityState<ApplyForSecondaryCustomer> {
    selectedApplyForSecondaryCustomerID: number | null;
}

export const applyForSecondaryCustomerAdapter:
    EntityAdapter<ApplyForSecondaryCustomer> = createEntityAdapter<ApplyForSecondaryCustomer>({
        selectId: (applyForSecondaryCustomer: ApplyForSecondaryCustomer) => applyForSecondaryCustomer.id,
        sortComparer: false,
    });

export const applyForSecondaryCustomerInitialState:
    ApplyForSecondaryCustomerState = applyForSecondaryCustomerAdapter.getInitialState({
        selectedApplyForSecondaryCustomerID: null,
    });
