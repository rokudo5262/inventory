import { SalesTeamBin } from './salesteambin';

export interface SalesTeam {
    salesTeamCode: string;
    salesTeamName: string;
    salesTeamType: string;
    channelCode: string;
    channelName: string;
    companyCode: string;
    customerCode: string;
    locationCode: string;
    locationName: string;
    salesForceCode: string;
    salesForceL1: string;
    salesForceL2: string;
    salesForceL3: string;
    salesForceL4: string;
    salesForceL5: string;
    salesForceL6: string;
    source: string;
    status: string;
    remark: string;
    deleted: boolean;
    createdBy: string;
    createdDateTime: Date;
    lastUpdatedBy: string;
    lastUpdatedDateTime: Date;
    salesTeamBin: SalesTeamBin[];
}
