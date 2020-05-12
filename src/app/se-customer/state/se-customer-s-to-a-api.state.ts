import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { SecondaryCustomerShipToAddress } from '@app/@core/data/se-customer-S-to-A';

export interface SecondaryCustomerShipToAddressState
    extends EntityState<SecondaryCustomerShipToAddress> {
    selectedSecondaryCustomerShipToAddressID: number | null;
}
export const secondarycustomershiptoaddressAdapter:
    EntityAdapter<SecondaryCustomerShipToAddress> = createEntityAdapter<SecondaryCustomerShipToAddress>({
        selectId: (secustomerstoa: SecondaryCustomerShipToAddress) => secustomerstoa.id,
        sortComparer: false,
    });
export const secondarycustomershiptoaddressInitialState:
    SecondaryCustomerShipToAddressState = secondarycustomershiptoaddressAdapter.getInitialState({
        selectedSecondaryCustomerShipToAddressID: null,
        entities: {
            0: {
                id: 0,
                companyCode: '',
                customerCode: '',
                secondaryCustomerCode: '',
                shipToCode: '',
                shipToName: '',
                shipToAddress: '',
                source: '',
                createdBy: '',
                createdDateTime: null,
                lastUpdatedBy: '',
                lastUpdatedDateTime: null,
                deleted: false,
                rowVersion: null,
                contact: '',
                deliveryCondition: '',
                deliveryTime: '',
                otherRequest: '',
                attachedDocument: '',
                status: '',
            },
        }
    });
