import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Book } from '@appdata';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookCollectionSelectors } from '@appbooks/selectors';
import { State } from '@appbooks/reducers';
import { BookCollectionActions } from '../actions';

@Component({
    selector: 'books-collection-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <mat-card>
        <mat-card-title>My Collection</mat-card-title>
    </mat-card>
    <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
    `,
})
export class CollectionPageComponent implements OnInit {
    books$: Observable<Book[]>;

    constructor(private store: Store<State>) {
        this.books$ = this.store.pipe(select(BookCollectionSelectors.selectBookCollection));
    }

    ngOnInit(): void {
        this.store.dispatch(BookCollectionActions.loadCollection());
    }
}
