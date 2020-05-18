import { ProductGroupDetail } from './product-group-detail';

export interface ProductGroup {
    id: number;
    companyCode: string;
    productGroupCode: string;
    customerCode: string;
    productGroupName: string;
    groupType: string;
    description: string;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
    deleted: boolean;
    productGroupDetail: ProductGroupDetail[];
}
