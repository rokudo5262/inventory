import { ApplyForCustomer } from './af-customer';

export interface ApplyForHeader {
    id: number;
    companyCode?: string;
    applyForCode: string;
    customerCode?: string;
    applyForName: string;
    applyForType: string;
    description: string;
    remark: string;
    status: string;
    source: string;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
    deleted: boolean;
    rowVersion?: [];
    applyForCustomers: ApplyForCustomer[];
}
