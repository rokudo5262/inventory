export interface CollectionState {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

export const collectionInitialState: CollectionState = {
  loaded: false,
  loading: false,
  ids: [
      'id1', 'id2', 'id3',
  ],
};
