export interface SecondaryCustomerShipToAddress {
    id: number;
    companyCode: string;
    customerCode: string;
    secondaryCustomerCode: string;
    shipToCode: string;
    shipToName: string;
    shipToAddress: string;
    source: string;
    createdBy: string;
    createdDateTime: Date;
    lastUpdatedBy: string;
    lastUpdatedDateTime: Date;
    deleted: boolean;
    rowVersion: AudioTimestamp;
    contact: string;
    deliveryCondition: string;
    deliveryTime: string;
    otherRequest: string;
    attachedDocument: string;
    status: string;
}
