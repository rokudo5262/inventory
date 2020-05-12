import { BookReducer } from '../reducers';
import { bookAdapter } from '../states';
import { createSelector } from '@ngrx/store';
import { selectBooksState } from './features.selectors';

export const selectBookEntitiesState = createSelector(
  selectBooksState,
  state => state[BookReducer.booksFeatureKey],
);

export const {
  selectIds: selectBookIds,
  selectEntities: selectBookEntities,
  selectAll: selectAllBooks,
  selectTotal: selectTotalBooks,
} = bookAdapter.getSelectors(selectBookEntitiesState);

export const BookSelectors = {
  selectBookEntitiesState,
  selectBookIds,
  selectBookEntities,
  selectAllBooks,
  selectTotalBooks,
};
