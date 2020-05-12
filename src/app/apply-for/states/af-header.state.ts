import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ApplyForHeader } from '@appdata';

export interface ApplyForHeaderState extends EntityState<ApplyForHeader> {
    selectedApplyForHeaderID: number | null;
}

export const applyForHeaderAdapter:
    EntityAdapter<ApplyForHeader> = createEntityAdapter<ApplyForHeader>({
        selectId: (applyForHeader: ApplyForHeader) => applyForHeader.id,
        sortComparer: false,
    });

export const applyForHeaderInitialState:
    ApplyForHeaderState = applyForHeaderAdapter.getInitialState({
        selectedApplyForHeaderID: null,
    });
