export interface SearchState {
    ids: number[];
    loading: boolean;
    error: string;
    query: string;
}

export const searchInitialState: SearchState = {
    ids: [],
    loading: false,
    error: '',
    query: '',
};
