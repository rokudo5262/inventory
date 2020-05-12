import { ProductGroupDetail } from './product-group-detail';

export interface ProductGroup {
    id: number;
    companyCode: string;
    productGroupCode: string;
    customerCode: string;
    productGroupName: string;
    groupType: string;
    description: string;
    deleted: boolean;
    productGroupDetail: ProductGroupDetail[];
}
