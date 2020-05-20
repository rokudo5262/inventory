import { Component, Input } from '@angular/core';
import { Book } from '@appdata';

@Component({
    selector: 'ngx-bc-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent {
    @Input() book: Book;

    get id() {
        return this.book.id;
    }

    get title() {
        return this.book.volumeInfo.title;
    }

    get subtitle() {
        return this.book.volumeInfo.subtitle;
    }

    get description() {
        return this.book.volumeInfo.description;
    }

    get thumbnail() {
        return (
            this.book.volumeInfo.imageLinks &&
            this.book.volumeInfo.imageLinks.smallThumbnail &&
            this.book.volumeInfo.imageLinks.smallThumbnail.replace('http:', '')
        );
    }
}
