import { Component, Input } from '@angular/core';
import { Book } from '@appdata';

@Component({
  selector: 'bc-book-preview-list',
  templateUrl: './book-preview-list.component.html',
  styleUrls: ['./book-preview-list.component.scss'],
})
export class BookPreviewListComponent {
  @Input() books: Book[];
}
