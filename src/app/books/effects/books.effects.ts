import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { asyncScheduler, EMPTY as empty, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

import { Book } from '@appdata';
import { FindBookActions, BooksApiActions } from '../actions';
import { GoogleBooksService } from '../services';

@Injectable()
export class BookEffects {
  search$ = createEffect(
    () => ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
      this.actions$.pipe(
        ofType(FindBookActions.searchBooks),
        debounceTime(debounce, scheduler),
        switchMap(({ query }) => {
          if (query === '') {
            return empty;
          }

          const nextSearch$ = this.actions$.pipe(
            ofType(FindBookActions.searchBooks),
            skip(1),
          );

          return this.googleBooks.searchBooks(query).pipe(
            takeUntil(nextSearch$),
            map((books: Book[]) => BooksApiActions.searchSuccess({ books })),
            catchError(err =>
              of(BooksApiActions.searchFailure({ errorMsg: err.message })),
            ),
          );
        }),
      ),
  );

  constructor(
    private actions$: Actions,
    private googleBooks: GoogleBooksService,
  ) { }
}
