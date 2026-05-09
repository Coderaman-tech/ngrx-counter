import {createReducer, on} from '@ngrx/store';
import {loadUsers, loadUsersFailure, loadUsersSuccess} from './user.actions';

export interface UserState {
    users: any[];
    loading: boolean;
    error: string | null;
}

export const initialState:UserState = {
    users: [],
    loading: false,
    error: null
};

export const userReducer = createReducer(
    initialState,
    on(loadUsers, (state) => ({ ...state, loading: true, error: null })),
    on(loadUsersSuccess, (state, { users }) => ({ ...state, users:users, loading: false,error:null})),
    on(loadUsersFailure, (state, { error }) => ({ ...state, error:error, loading: false }))
);