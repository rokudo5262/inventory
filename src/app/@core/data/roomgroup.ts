export interface RoomGroup {
    id: number;
    name: string;
    note: string;
    status: string;
    deleted: boolean;
    rowVersion?: [];
    createdBy?: string;
    createdDateTime?: Date;
    lastUpdatedBy?: string;
    lastUpdatedDateTime?: Date;
}
