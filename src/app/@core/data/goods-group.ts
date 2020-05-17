export interface GoodsGroup {
    id: number;
    code: string;
    name: string;
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
    deleted: boolean;
}

