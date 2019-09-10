// import * as ai from './types';
import { Dispatch } from 'react';
import {
    setSearchFieldAction, CHANGE_SEARCH_FIELD, requestUsersAction, REQUEST_USERS_PENDING,
    REQUEST_USERS_SUCCESS, REQUEST_USERS_FAILED
} from './types';

export const setSearchField = (text: string): setSearchFieldAction => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text,
    }
};

export const USERS_LOCATION = 'http://localhost:8005/api/users';
export const setRequestUsers = () => {
    // Dispatches an requestUsersAction
    return async (dispatch: Dispatch<requestUsersAction>) => {
        await dispatch({
            type: REQUEST_USERS_PENDING,
        })
        await fetch(USERS_LOCATION)
            .then(response => {
                return response.json();
            })
            .then(data => dispatch({
                type: REQUEST_USERS_SUCCESS,
                payload: JSON.parse(data)
            }))
            .catch(error => dispatch({
                type: REQUEST_USERS_FAILED,
                payload: error
            }));
    }
}

export const POSTS_LOCATION = 'http://localhost:8005/api/users';
export const setRequestPosts = () => {
    // Dispatches an requestUsersAction
    return async (dispatch: Dispatch<requestUsersAction>) => {
        await dispatch({
            type: REQUEST_USERS_PENDING,
        })
        await fetch(USERS_LOCATION)
            .then(response => {
                return response.json();
            })
            .then(data => dispatch({
                type: REQUEST_USERS_SUCCESS,
                payload: data
            }))
            .catch(error => dispatch({
                type: REQUEST_USERS_FAILED,
                payload: error
            }));
    }
}