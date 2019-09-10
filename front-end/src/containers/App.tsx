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
            console.log(event);
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
                    <CardList {...{robot_list:(this.filterUsers(users))}}/>
                </ErrorBoundary>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);