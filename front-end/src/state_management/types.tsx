import { userProps } from "../components/cardList/users";

export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";

export const REQUEST_USERS_PENDING = 'REQUEST_USERS_PENDING';
export const REQUEST_USERS_SUCCESS = 'REQUEST_USERS_SUCCESS';
export const REQUEST_USERS_FAILED = 'REQUEST_USERS_FAILED';

export type REQUEST_USERS =
    'REQUEST_USERS_PENDING' |
    'REQUEST_USERS_SUCCESS' |
    'REQUEST_USERS_FAILED';


export type setSearchFieldAction =  {
    type: "CHANGE_SEARCH_FIELD",
    payload: string
}

export type requestUsersAction =  {
    type: REQUEST_USERS,
    payload?: string | userProps[],
}

export type stateUsers =  {
    isPending: boolean,
    users: userProps[] | [],
    error: string
}

export type stateSearch =  {
    searchField: string
}


export type AppState =  {
    searchUsers: stateSearch,
    requestUsers: stateUsers
}


export type AppProps =  {
    error: string,
    isPending: boolean,
    onRequestUsers: () => void,
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement> ) => void,
    users: userProps[] | [],
    searchField: string,
}
