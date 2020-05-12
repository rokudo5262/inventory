import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Customer } from '@appdata';

export interface CustomerState extends EntityState<Customer> {
    selectedCustomerId: number | null;
}

export function sortByName(customer1: Customer, customer2: Customer): number {
    return customer1.name.localeCompare(customer2.name);
}
export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>({
    selectId: (customer: Customer) => customer.id,
    sortComparer: sortByName,
});

export const customerInitialState: CustomerState = customerAdapter.getInitialState({
    selectedCustomerId: null,
    entities: {
        0: {
            id: 0,
            name: '',
            phone: '',
        },
    },
});
