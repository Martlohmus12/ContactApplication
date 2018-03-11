import React from 'react';
import Sidebar from './';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('Sidebar', () => {
    const mockStore = configureStore();
    let store, initialState;

	beforeEach(() => {
		initialState = {
            contacts: [],
            fetchAllContacts: jest.fn(),
            selectContact: jest.fn(),
            selectContact: jest.fn(),
            search: jest.fn(),
        };
        store = mockStore(initialState);
        store.dispatch = jest.fn();
	});

    test('renders SearchBar component', () => {
       // TODO
    });

    test('renders ContactList component', () => {
       // TODO
    });

    test('sets state when search function is called ', () => {
        // TODO
    });

    test('filterContact function filters correctly by search term', () => {
        // TODO
    });

    test('sets state when search function is called ', () => {
        // TODO
    });
});