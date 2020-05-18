export interface ProductGroupDetail {
    id: number;
    companyCode: string;
    productGroupCode: string;
    customerCode: string;
    detailType: string;
    hierarchyCode: string;
    hierarchyLevel: number;
    hierarchyL01: string;
    hierarchyL02: string;
    hierarchyL03: string;
    hierarchyL04: string;
    hierarchyL05: string;
    hierarchyL06: string;
    hierarchyL07: string;
    hierarchyL08: string;
    spaceCode: string;
    materialType: string;
    productCategoryCode: string;
    productCategoryLevel: number;
    productCode: string;
    UOM: string;
    quatity: string;
    desciption: string;
    compareType: string;
    min: number;
    max: number;
    type: string;
    source: string;
    hierarchyL01Name: string;
    hierarchyL02Name: string;
    hierarchyL03Name: string;
    hierarchyL04Name: string;
    hierarchyL05Name: string;
    productName: string;
    categoryL01: string;
    categoryL02: string;
    categoryL03: string;
    categoryL04: string;
    categoryL05: string;
    categoryL06: string;
    categoryL07: string;
    categoryL08: string;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
    deleted: boolean;
}
