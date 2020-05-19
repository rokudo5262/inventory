export interface IOrder {
    orderCode: number;
    customerCode: number;
    staffCode: number;
    deleted: boolean;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
}
