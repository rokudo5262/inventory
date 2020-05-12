import { createReducer, on } from '@ngrx/store';
import { searchInitialState } from '../states';
import { BooksApiActions, FindBookActions } from '../actions';

export const searchFeatureKey = 'search';

export const reducer = createReducer(
    searchInitialState,
    on(FindBookActions.searchBooks, (state, { query }) => ({
        ...state,
        loading: true,
    })),
    on(BooksApiActions.searchSuccess, (state, { books }) => ({
        ids: books.map(book => book.id),
        loading: false,
        error: '',
        query: state.query,
    })),
);
