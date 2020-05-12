import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Structure } from '@app/@core/data/structure';

export interface StructureState extends EntityState<Structure> {
    selectedStructureID: number | null;
}
export const structureAdapter: EntityAdapter<Structure> = createEntityAdapter<Structure>({
    selectId: (structure: Structure) => structure.id,
    sortComparer: false,
});
export const structureInitialState: StructureState = structureAdapter.getInitialState({
    selectedStructureID: null,
    entities: {
        0: {
            id: 0,
            companyCode: '',
            structureCode: '',
            structureName: '',
            level: 0,
            type: '',
            ParentCode: '',
            Status: '',
            Remark: '',
            Source: '',
            delete1: false,
            button: false,
        },
    }
});
