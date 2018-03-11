export const RECEIVE_CONTACT_INFO = 'RECEIVE_CONTACT_INFO';

export function selectContact(contact) {
    // console.log(contact);
    
    return {
      type: RECEIVE_CONTACT_INFO,
      contact
    };
}

export function fetchContacts(contact) {
    return (dispatch) => {
        dispatch(selectContact(contact));
    };
}