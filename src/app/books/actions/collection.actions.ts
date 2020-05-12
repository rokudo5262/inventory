import { createAction } from '@ngrx/store';

export enum CollectionActionTypes {
  LoadCollection = '[Collection Page] Load Collection',
}

export const loadCollection = createAction(
  CollectionActionTypes.LoadCollection,
);
