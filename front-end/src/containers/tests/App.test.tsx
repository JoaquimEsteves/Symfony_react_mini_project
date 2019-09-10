import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { userProps } from '../../components/cardList/users';
import { AppProps } from '../../state_management/types';
import { App } from '../App';
import '../../setupTests';

let wrapper: ShallowWrapper<any, any>;

beforeEach(() => {
    const exampleProps: AppProps = {
        error: '',
        onRequestUsers: jest.fn(),
        isPending: false,
        onSearchChange: jest.fn(),
        users: [],
        searchField: 'yo',
    }
    wrapper = shallow(<App {...exampleProps} />);
})


it('App with no Store', () => {
    expect(wrapper.debug()).toMatchSnapshot();
})

it('App filter my stuff yo', () => {
    const yo_list: userProps[] = [
        { 'email': 'yo', id: 0, name: 'yo', 'username': 'yo' },
        { 'email': 'yay', id: 1, name: 'yay', 'username': 'yay' },
    ];
    const exampleProps: AppProps = {
        error: '',
        onRequestUsers: jest.fn(),
        isPending: false,
        onSearchChange: jest.fn(),
        users: yo_list,
        searchField: 'yo',
    }
    const instance = shallow(<App {...exampleProps} />).instance() as App;
    expect(instance.filterUsers(yo_list)).toEqual([{ 'email': 'yo', id: 0, name: 'yo', 'username': 'yo' }]);
})

it('App is pending branch', () => {
    const exampleProps: AppProps = {
        error: 'yo',
        onRequestUsers: jest.fn(),
        isPending: true,
        onSearchChange: jest.fn(),
        users: [],
        searchField: 'yo',
    }
    const wrapper = shallow(<App {...exampleProps} />);
    expect(wrapper.find('h1').text().includes('Yo, loading')).toBe(true);
})