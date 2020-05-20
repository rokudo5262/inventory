import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '@appdata';

@Component({
    selector: 'ngx-bc-selected-book-page',
    templateUrl: './selected-book-page.component.html',
    styleUrls: ['./selected-book-page.component.scss'],
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
