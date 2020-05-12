import { CodeDetail } from './code-detail';

export interface CodeMaster {
    id: number;
    companyCode: string;
    cMcode: string;
    cMname: string;
    standardName: string;
    systemCode: boolean;
    remark: string;
    status: string;
    source: string;
    createdBy: string;
    createdDateTime: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
    deleted: boolean;
    rowVersion: [];
    codeDetail: CodeDetail[];
}
