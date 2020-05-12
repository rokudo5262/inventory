import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '@appdata';

@Component({
    selector: 'ngx-bc-selected-book-page',
    template: `
        <ngx-bc-book-detail
            [book]="book$ | async"
        >
        </ngx-bc-book-detail>
    `,
})
export class SelectedBookPageComponent {
    book$: Observable<Book>;

    constructor(
        // private store: Store<fromBooks.State>
        ) {
        // this.book$ = store.pipe(
        //     select(fromBooks.selectSelectedBook) as Observable<Book>
        // )
    }

}
