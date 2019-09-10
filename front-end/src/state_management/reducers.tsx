import * as types from "./types";
import { userProps } from "../components/cardList/users";

const initialStateSearch: types.stateSearch = {
    searchField: '',
};

const initialStateUsers: types.stateUsers = {
    isPending: false,
    users: [],
    error: ''
};

export const searchUsers = (state = initialStateSearch, action: types.setSearchFieldAction) => {
    switch (action.type) {
        case types.CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
}

export const requestUsers = (state = initialStateUsers, action: types.requestUsersAction) => {
    switch (action.type) {
        case types.REQUEST_USERS_PENDING:
            return {...state, isPending:true};
        case types.REQUEST_USERS_SUCCESS:
            return {...state, users: action.payload as userProps[], isPending:false};
        case types.REQUEST_USERS_FAILED:
                return {...state, error: action.payload as string, isPending:false};
        default:
            return state;
    }
}