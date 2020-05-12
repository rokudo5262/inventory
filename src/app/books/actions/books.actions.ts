import { Book } from '@appdata';
import { props, createAction } from '@ngrx/store';

export enum BooksActionTypes {
  SearchSuccess = '[Books/API] Search Success',
  SearchFailure = '[Books/API] Search Failure',
}

export const searchSuccess = createAction(
  BooksActionTypes.SearchSuccess, // action name
  props<{ books: Book[] }>(), // action payload type
);

export const searchFailure = createAction(
  BooksActionTypes.SearchFailure, // action name
  props<{ errorMsg: string }>(), // action payload type
);
