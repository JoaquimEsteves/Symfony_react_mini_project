import * as act from '../actions';
import { CHANGE_SEARCH_FIELD, REQUEST_USERS_PENDING, REQUEST_USERS_SUCCESS } from '../types';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock'

export const mockStore = configureMockStore([thunkMiddleware]);


const apiCall = (link: RequestInfo) => {
    fetch(link).then(response => response.json())
}

it('should create an action to search robots', () => {
    const test = 'woooo';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: test
    }
    expect(act.setSearchField(test)).toEqual(expectedAction);
})

it('test requestUsers', async () => {
    const store = mockStore();
    const expectedActions = [
        { type: REQUEST_USERS_PENDING },
        {
            type: REQUEST_USERS_SUCCESS,
            payload: { test: "yo" } 
        }
    ]
    fetchMock.getOnce(act.USERS_LOCATION, { test: "yo" })

    // @ts-ignore
    await store.dispatch(act.setRequestUsers()).then(() => {
        // return of async actions
        const actions = store.getActions();
        console.log(actions);
        expect(actions).toEqual(expectedActions);
    });
})

