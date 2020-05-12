import * as BookReducer from './books.reducer';
import * as BookCollectionReducer from './collection.reducer';
import * as SearchReducer from './search.reducer';
import { BookState, CollectionState, SearchState } from '../states';
import { combineReducers, Action } from '@ngrx/store';

export {
  BookReducer,
  BookCollectionReducer,
  SearchReducer,
};

export const FeatureKey = 'books';

export interface State {
  [SearchReducer.searchFeatureKey]: SearchState;
  [BookReducer.booksFeatureKey]: BookState;
  [BookCollectionReducer.collectionFeatureKey]: CollectionState;
}

export function reducer(state: State | undefined, action: Action) {
  return combineReducers({
    [SearchReducer.searchFeatureKey]: SearchReducer.reducer,
    [BookReducer.booksFeatureKey]: BookReducer.reducer,
    [BookCollectionReducer.collectionFeatureKey]: BookCollectionReducer.reducer,
  })(state, action);
}
