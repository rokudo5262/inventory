import { createReducer, on } from '@ngrx/store';
import { BooksApiActions, BookCollectionApiActions } from '../actions';
import { bookInitialState, bookAdapter } from '../states';

export const booksFeatureKey = 'books';

export const reducer = createReducer(
    bookInitialState,
    // on(ViewBookPageActions.selectBook, (state, { id }) => ({
    //     ...state,
    //     selectedBookId: id,
    // })),
    on(
        BooksApiActions.searchSuccess,
        BookCollectionApiActions.loadBooksSuccess,
        (state, { books }) => bookAdapter.addMany(books, state),
    ),
);
