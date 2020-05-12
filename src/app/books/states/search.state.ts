export interface SearchState {
    ids: string[];
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
