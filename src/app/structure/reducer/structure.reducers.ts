import { createReducer, on } from '@ngrx/store';
import { structureInitialState, structureAdapter } from '../state';
import { StructureApiActions, StructureCollectionApiActions } from '../actions';

export const structuresFeatureKey = 'structures';

export const reducer = createReducer(
    structureInitialState,
    on(
        StructureApiActions.getStructures,
        StructureCollectionApiActions.loadStructuresSuccess,
        (state, { structures }) => {
            structures = structures.filter(x => x.delete1 === false);
            return structureAdapter.addMany(structures, state);
        }
    ),
    on(
        StructureApiActions.addStructure,
        StructureCollectionApiActions.addStructureSuccess,
        (state, { structure }) => structureAdapter.addOne(structure, state)
    ),
    on(
        StructureApiActions.updateStructure,
        // StructureCollectionApiActions.removeStructureSuccess,
        (state, { update }) => structureAdapter.updateOne(update, state)
    ),
    on(
        StructureApiActions.deleteStructure,
        StructureCollectionApiActions.deleteStructureSuccess,
        (state, { id }) => structureAdapter.removeOne(id, state)
    ),
    on(
        StructureApiActions.deleteStructures,
        StructureCollectionApiActions.deletesStructureSuccess,
        (state, { ids }) => structureAdapter.removeMany(ids, state)
    ),
);
