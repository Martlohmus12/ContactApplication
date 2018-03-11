import React from 'react';
import Searchbar from './';
import { shallow } from 'enzyme';

describe('Searchbar', () => {
    let props;

	beforeEach(() => {
		props = {
			search: jest.fn(),
		};
	});

    test('calls search method when input has changed', () => {
        const wrapper = shallow(
            <Searchbar {...props}/>,
        );

        wrapper.find('#search').simulate('change');
        expect(props.search).toHaveBeenCalled();
    });
});