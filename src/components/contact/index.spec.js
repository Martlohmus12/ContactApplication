import React from 'react';
import Contact from './';
import { shallow } from 'enzyme';

describe('Contact', () => {
    let props;

	beforeEach(() => {
		props = {
			contact: {
                sex: 'male',
                firstname: 'martin',
                lastname: 'mets'
			},
			selectContact: jest.fn(),
		};
	});

    test('renders female avatar if given sex is female', () => {
        const contact = {
            sex: 'female',
            firstname: 'mari',
            lastname: 'mets'
        };
        const wrapper = shallow(
            <Contact {...props} contact={contact}/>,
        );

        expect(wrapper.find('.avatar-girl')).toHaveLength(1);
    });

    test('renders male avatar if given sex is male', () => {
        const wrapper = shallow(
            <Contact {...props}/>,
        );

        expect(wrapper.find('.avatar-boy')).toHaveLength(1);
    });

    test('concats firstname and lastname correctly', () => {
        const wrapper = shallow(
            <Contact {...props}/>,
        );

        expect(wrapper.find('.contactName').text()).toEqual('martin mets');
    });

    test('calls selectContact when contact is clicked', () => {
        const wrapper = shallow(
            <Contact {...props}/>,
        );

        wrapper.simulate('click');
        expect(props.selectContact).toHaveBeenCalled();
    });
});