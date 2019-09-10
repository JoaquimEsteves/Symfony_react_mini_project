import * as rdrs from '../reducers';

describe('searchUsers reduer test', () => {
    it('Test empty params', () => {
        // Test empty array, ts will naturally complain
        // @ts-ignore
        expect(rdrs.searchUsers(undefined, {})).toEqual({
            searchField: ''
        })
    })

    it('Test yo', () => {
        expect(rdrs.searchUsers(undefined, {
            payload: "yo",
            type: "CHANGE_SEARCH_FIELD"
        })).toEqual({
            searchField: 'yo'
        })
    })
    it('Test with a state', () => {
        expect(rdrs.searchUsers({
            searchField:"oldSearch"
        }, {
            payload: "yo",
            type: "CHANGE_SEARCH_FIELD"
        })).toEqual({
            searchField: 'yo'
        })
    })
    it('Test with an incorrect typo!', () => {
        expect(rdrs.searchUsers({
            searchField:"oldSearch"
        }, {
            payload: "yo",
            // As the name implies, we have an incorrect type here. So TS will compain
            // @ts-ignore
            type: "REQUEST_USERS_PENDING"
        })).toEqual({
            searchField: 'oldSearch'
        })
        expect(rdrs.searchUsers({
            searchField:"oldSearch"
        }, {
            payload: "yo",
            // As the name implies, we have an incorrect type here. So TS will compain
            // @ts-ignore
            type: "REQUEST_USERS_SUCCESS"
        })).toEqual({
            searchField: 'oldSearch'
        })
        expect(rdrs.searchUsers({
            searchField:"oldSearch"
        }, {
            payload: "yo",
            // As the name implies, we have an incorrect type here. So TS will compain
            // @ts-ignore
            type: "REQUEST_USERS_FAILED"
        })).toEqual({
            searchField: 'oldSearch'
        })
        expect(rdrs.searchUsers({
            searchField:"oldSearch"
        }, {
            payload: "yo",
            // As the name implies, we have an incorrect type here. So TS will compain
            // @ts-ignore
            type: null
        })).toEqual({
            searchField: 'oldSearch'
        })
    })
})