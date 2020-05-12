import { SearchState } from '../states';
import { createSelector } from '@ngrx/store';
import { selectBooksState } from './features.selectors';
import { SearchReducer } from '../reducers';
import { selectBookEntitiesState } from './books.selectors';
import { Book } from '@appdata';

/********** Local API *************/
export const getIds = (state: SearchState) => state.ids;
export const getQuery = (state: SearchState) => state.query;
export const getLoading = (state: SearchState) => state.loading;
export const getError = (state: SearchState) => state.error;

/********** Public API *************/
export const selectSearchBookState = createSelector(
    selectBooksState,
    state => state[SearchReducer.searchFeatureKey],
);

export const selectSearchBookIds = createSelector(
    selectSearchBookState,
    getIds,
);

export const selectSearchBookQuery = createSelector(
    selectSearchBookState,
    getQuery,
);

export const selectSearchBookLoading = createSelector(
    selectSearchBookState,
    getLoading,
);

export const selectSearchBookError = createSelector(
    selectSearchBookState,
    getError,
);

export const selectSearchBookResults = createSelector(
    selectBookEntitiesState,
    selectSearchBookIds,
    (books, searchIds) => {
        return searchIds
            .map(id => books.entities[id])
            .filter((book): book is Book => book != null);
    },
);


export const BookSearchSelectors = {
    selectSearchBookState,
    selectSearchBookIds,
    selectSearchBookQuery,
    selectSearchBookLoading,
    selectSearchBookError,
    selectSearchBookResults,
};
