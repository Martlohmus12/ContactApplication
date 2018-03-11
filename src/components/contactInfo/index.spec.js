import React from 'react';
import ContactInfo from './';
import { shallow } from 'enzyme';

describe('ContactInfo', () => {
    let props;

	beforeEach(() => {
		props = {
			contact: {
                firstname: 'martin',
                lastname: 'mets',
                email: "martinmets@test.ee",
                mobile: "123456",
                gender: "male"
			},
			selectContact: jest.fn(),
		};
	});

    test('renders female avatar if given gender is female', () => {
        const contact = {
            gender: 'female',
            firstname: 'mari',
            lastname: 'mets'
        };
        const wrapper = shallow(
            <ContactInfo {...props} contact={contact}/>,
        );

        expect(wrapper.find('.avatar-girl')).toHaveLength(1);
    });

    test('renders male avatar if given gender is male', () => {
        const wrapper = shallow(
            <ContactInfo {...props}/>,
        );

        expect(wrapper.find('.avatar-boy')).toHaveLength(1);
    });

    test('concats firstname and lastname correctly', () => {
        const wrapper = shallow(
            <ContactInfo {...props}/>,
        );

        expect(wrapper.find('.contactName').text()).toEqual('martin mets');
    });
});