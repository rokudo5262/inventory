import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { CodeDetail } from '@appdata';

export interface CodeDetailState extends EntityState<CodeDetail> {
    selectedCodeDetailID: number | null;
}

export function sortbycMCode(cMCode1: CodeDetail, cMCode2: CodeDetail): number {
    return cMCode1.cDcode.localeCompare(cMCode2.cDcode);
}

export const codeDetailAdapter: EntityAdapter<CodeDetail> = createEntityAdapter<CodeDetail>({
    selectId: (codeDetail: CodeDetail) => codeDetail.id,
    sortComparer: sortbycMCode,
});

export const codeDetailInitialState: CodeDetailState = codeDetailAdapter.getInitialState({
    selectedCodeDetailID: null,
    entities: {
        0: {
        }
    }
});
