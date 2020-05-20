import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Book } from '@appdata';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookCollectionSelectors } from '@appbooks/selectors';
import { State } from '@appbooks/reducers';
import { BookCollectionActions } from '../../actions';

@Component({
    selector: 'books-collection-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './collection-page.component.html',
    styleUrls: ['./collection-page.component.scss'],
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
