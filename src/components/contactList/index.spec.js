import React from 'react';
import ContactList from './';
import { mount } from 'enzyme';

describe('ContactList', () => {
    let props;

	beforeEach(() => {
		props = {
			contacts: [
                {
                    firstname: 'martin',
                    lastname: 'mets',
                    email: "martinmets@test.ee",
                    mobile: "123456",
                    gender: "male"
                },
                {
                    firstname: 'mari',
                    lastname: 'mets',
                    email: "marimets@test.ee",
                    mobile: "1234567",
                    gender: "female"
                }
            ],
			selectContact: jest.fn(),
		};
	});

    test('renders all received conctacts', () => {
        const wrapper = mount(
            <ContactList {...props}/>,
        );

        expect(wrapper.find('.contact').length).toEqual(props.contacts.length);
    });
});