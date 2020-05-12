import { createSelector } from '@ngrx/store';
import { CollectionState } from '../states';
import { BookCollectionReducer } from '../reducers';
import { Book } from '@appdata';
import { selectBooksState } from './features.selectors';
import { BookSelectors } from './books.selectors';

/********** Local API *************/
export const getLoaded = (state: CollectionState) => state.loaded;

export const getLoading = (state: CollectionState) => state.loading;

export const getIds = (state: CollectionState) => state.ids;

/********** Public API *************/
export const selectCollectionState = createSelector(
  selectBooksState,
  state => state[BookCollectionReducer.collectionFeatureKey],
);

export const selectCollectionLoaded = createSelector(
  selectCollectionState,
  getLoaded,
);

export const selectCollectionLoading = createSelector(
  selectCollectionState,
  getLoading,
);

export const selectCollectionBookIds = createSelector(
  selectCollectionState,
  getIds,
);

export const selectBookCollection = createSelector(
  BookSelectors.selectBookEntities,
  selectCollectionBookIds,
  (entities, ids) => {
    return ids
      .map(id => entities[id])
      .filter((book): book is Book => book != null);
  },
);

export const BookCollectionSelectors = {
  selectCollectionState,
  selectCollectionLoaded,
  selectCollectionLoading,
  selectCollectionBookIds,
  selectBookCollection,
};

