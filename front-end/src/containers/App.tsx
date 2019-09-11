import React, { Dispatch } from 'react';
import CardList from '../components/cardList/cardList';
import Header from '../components/Header/header';
import { userProps } from '../components/cardList/users';
import ErrorBoundary from '../components/error_boundaries/error_boundary';
import { setSearchField, setRequestUsers } from '../state_management/actions';
import { AppState, AppProps } from '../state_management/types';
import { connect } from 'react-redux';
import './App.scss';

export const mapStateToProps = (state: AppState) => {
    return {
        searchField: state.searchUsers.searchField,
        users: state.requestUsers.users,
        isPending: state.requestUsers.isPending,
        error: state.requestUsers.error,
    }
}
export const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            return dispatch(setSearchField(event.target.value))
        },
        onRequestUsers: () => dispatch(setRequestUsers())
    }
}



export class App extends React.Component<AppProps, AppState> {

    async componentDidMount() {
        this.props.onRequestUsers();
    }
    filterUsers = (users: userProps[] | []) => users.filter((user: userProps) => {
        let user_name = user.name.toLowerCase();
        let search_field = this.props.searchField.toLowerCase();
        return user_name.includes(search_field);
    });

    render() {
        const { onSearchChange, users, isPending } = this.props;
        if (isPending) {
            return (
                <div className="tc">
                    <ErrorBoundary>
                        <h1>Yo, loading</h1>
                    </ErrorBoundary>
                </div>
            );
        }
        if (users.length === 0) {
            return (
                <div className="tc">
                    <h1>The users list is empty! Are you sure you populated the database?</h1>
                    <h1>Simply call <code>console app:download-users</code> on the server shell!</h1>
                    <p>You might aswell run <code>console app:download-posts</code> to access the user posts</p>You might aswell run
                </div>
            );
        }
        return (
            <div className="tc">
                <Header />
                <div>
                    <input
                        aria-label='Search the users'
                        className="searchBox"
                        type='search' placeholder='yo'
                        onChange={onSearchChange}
                    />
                </div>

                <ErrorBoundary>
                    <CardList {...{ user_list: (this.filterUsers(users)) }} />
                </ErrorBoundary>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);