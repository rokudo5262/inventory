export interface Calendar {
    id: number;
    companyCode: string;
    customerCode: string;
    recurring: string;
    workingDate: Date;
    workingDay: string;
    description: string;
    nonWorking: boolean;
    status: string;
}
