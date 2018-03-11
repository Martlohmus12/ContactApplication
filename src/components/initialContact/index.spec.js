import React from 'react';
import InitialContact from './';
import { shallow } from 'enzyme';

describe('InitialContact', () => {
    let props;

	beforeEach(() => {
		props = {
			search: jest.fn(),
		};
	});

    test('renders initialContact correctly', () => {
        const wrapper = shallow(
            <InitialContact {...props}/>,
        );

        expect(wrapper.find('.nothingSelectedText').text()).toEqual('Nothing selected');
        expect(wrapper.find('.avatar-sad')).toHaveLength(1);
        expect(wrapper.find('.avatar-medium')).toHaveLength(1);
        expect(wrapper.find('.nothingSelectedText')).toHaveLength(1);
    });

});