import { Component, Input } from '@angular/core';
import { Book } from '@appdata';

@Component({
  selector: 'bc-book-authors',
  templateUrl: './book-authors.component.html',
  styleUrls: ['./book-authors.component.scss'],
})
export class BookAuthorsComponent {
  @Input() book: Book;

  get authors() {
    return this.book.volumeInfo.authors;
  }
}
