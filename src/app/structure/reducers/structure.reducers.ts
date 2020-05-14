import { createReducer, on } from '@ngrx/store';
import { structureInitialState, structureAdapter } from '../states';
import { StructuresActions, StructuresApiActions } from '../actions';

export const structuresFeatureKey = 'structures';

export const reducer = createReducer(
    structureInitialState,
    on(
        StructuresActions.getStructures,
        StructuresApiActions.loadStructuresSuccess,
        (state, { structures }) => {
            structures = structures.filter(x => x.delete1 === false);
            return structureAdapter.addMany(structures, state);
        }
    ),
    on(
        StructuresActions.addStructure,
        StructuresApiActions.addStructureSuccess,
        (state, { structure }) => structureAdapter.addOne(structure, state)
    ),
    on(
        StructuresActions.updateStructure,
        (state, { update }) => structureAdapter.updateOne(update, state)
    ),
    on(
        StructuresActions.deleteStructure,
        StructuresApiActions.deleteStructureSuccess,
        (state, { id }) => structureAdapter.removeOne(id, state)
    ),
    on(
        StructuresActions.deleteStructures,
        StructuresApiActions.deletesStructureSuccess,
        (state, { ids }) => structureAdapter.removeMany(ids, state)
    ),
);
