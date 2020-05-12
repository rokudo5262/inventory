import { createAction, props } from '@ngrx/store';

export const searchBooks = createAction(
  '[Find Book] Search Books',
  props<{ query: string }>(),
);
