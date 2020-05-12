import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookCollectionActions, BookCollectionApiActions } from '../actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BookStorageService } from '../services/book-storage.service';
import { Book } from '@appdata';

@Injectable()
export class CollectionEffects {
    loadCollections$ = createEffect(() =>
        this.actions$.pipe(
            ofType(BookCollectionActions.loadCollection),
            switchMap(() =>
                this.storageService.getCollection().pipe(
                    map((books: Book[]) =>
                        BookCollectionApiActions.loadBooksSuccess({ books }),
                    ),
                    catchError(error =>
                      of(BookCollectionApiActions.loadBooksFailure({ error })),
                    ),
                ),
            ),
        ),
    );

    constructor(
        private actions$: Actions,
        private storageService: BookStorageService,
    ) {}
}
