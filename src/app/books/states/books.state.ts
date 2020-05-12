import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Book } from '@appdata';

export interface BookState extends EntityState<Book> {
  selectedBookId: string | null;
}

export const bookAdapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId: (book: Book) => book.id,
  sortComparer: false,
});

export const bookInitialState: BookState = bookAdapter.getInitialState({
  selectedBookId: null,
  entities: {
      'id1': {
          id: 'id1',
          volumeInfo: {
              title: 'Hello World',
              authors: [ 'hung' ],
          },
      },
      'id2': {
          id: 'id2',
          volumeInfo: {
              title: 'ID 2 Book',
              authors: [ 'hung' ],
          },
      },
  },
});
