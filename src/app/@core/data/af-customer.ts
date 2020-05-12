import { ApplyForSecondaryCustomer } from './af-secondary';

export interface ApplyForCustomer {
    id: number;
    companyCode?: string;
    applyForCode: string;
    applyForCustomerCode: string;
    customerCode?: string;
    salesTeamCode?: string;
    type: string;
    primaryCustomerHierarchyCode: string;
    primaryCustomerHierarchyLevel: number;
    regionCode: string;
    regionLevel: number;
    source: string;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
    deleted: boolean;
    rowVersion?: [];
    description: string;
    depotCode: string;
    salesRouteCode: string;
    salesRegionL1: string;
    salesRegionL2: string;
    salesRegionL3: string;
    salesRegionL4: string;
    salesRegionL5: string;
    applyForSecondaryCustomers: ApplyForSecondaryCustomer[];
}
