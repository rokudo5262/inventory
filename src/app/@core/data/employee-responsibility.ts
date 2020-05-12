export interface EmployeeResponsibility {
    lineId: number;
    employeeCode: string;
    salesRegionCode: string;
    salesRegionLevel: string;
    companyCode: string;
    customerCode: string;
    locationCode: string;
    salesRouteCode: string;
    role: string;
    source: string;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
    // rowNumber?: [];
    deleted: boolean;
}
