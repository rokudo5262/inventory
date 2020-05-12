import { Book } from '@appdata';
import { Store, select } from '@ngrx/store';
import { State } from '@app/reducers';
import { Observable } from 'rxjs';
import { OnInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { BookCollectionActions, FindBookActions } from '../actions';
import { BookCollectionSelectors, BookSearchSelectors } from '../selectors';
import { take } from 'rxjs/operators';

@Component({
    selector: 'books-library-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'library.component.html',
})
export class LibraryPageComponent implements OnInit {
    books$: Observable<Book[]>;

    // Search Function
    searchedBooks$: Observable<Book[]>;
    searchQuery$: Observable<string>;
    searchLoading$: Observable<boolean>;
    searchError$: Observable<string>;

    constructor(private store: Store<State>) {
        this.books$ = this.store.pipe(select(BookCollectionSelectors.selectBookCollection));

        // Search Function
        this.searchedBooks$ = this.store.pipe(select(BookSearchSelectors.selectSearchBookResults));
        this.searchQuery$ = this.store.pipe(select(BookSearchSelectors.selectSearchBookQuery), take(1));
        this.searchLoading$ = this.store.pipe(select(BookSearchSelectors.selectSearchBookLoading));
        this.searchError$ = this.store.pipe(select(BookSearchSelectors.selectSearchBookError));

        // this.searchedBooks$.subscribe(books => console.log('receive ', books.length));
    }

    ngOnInit(): void {
        this.store.dispatch(BookCollectionActions.loadCollection());
    }

    search(query: string) {
        this.store.dispatch(FindBookActions.searchBooks({ query }));
    }
}
