import { createReducer, on } from '@ngrx/store';
import { collectionInitialState } from '../states';
import { BookCollectionApiActions, BookCollectionActions } from '../actions';

export const collectionFeatureKey = 'collection';

export const reducer = createReducer(
    collectionInitialState,
    on(BookCollectionActions.loadCollection, state => ({
        ...state,
        loading: true,
    })),
    on(BookCollectionApiActions.loadBooksSuccess, (state, { books }) => ({
        loaded: true,
        loading: false,
        ids: books.map(book => book.id),
    })),
);
