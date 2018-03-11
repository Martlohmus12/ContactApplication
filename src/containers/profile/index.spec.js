import React from 'react';
import Profile from './';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('Profile', () => {
    const mockStore = configureStore();
    let store, initialState;

	beforeEach(() => {
		initialState = {
            contact: null,
        };
        store = mockStore();
        store.dispatch = jest.fn();
	});

    test('renders InitialContact component when contact props is empty', () => {
        //TODO
    });

    test('renders ContactInfo component when contact props has values', () => {
        //TODO
    });

});