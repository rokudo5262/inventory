
export interface ILocation {
    id: number;
    companyCode?: string;
    customerCode?: string;
    locationCode: string;
    locationType: string;
    locationName: string;
    phone: string;
    address: string;
    remark: string;
    status: string;
    salesRegionL1?: string;
    salesRegionL2?: string;
    salesRegionL3?: string;
    salesRegionL4?: string;
    salesRegionL5?: string;
    salesRegionL1name?: string;
    salesRegionL2name?: string;
    salesRegionL3name?: string;
    salesRegionL4name?: string;
    salesRegionL5name?: string;
    source: string;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
    deleted: boolean;
    rowVersion?: [];
    logistics?: boolean;
    defaultLogisticCode?: string;
    block: boolean;
    blockEndDate?: Date;
}
