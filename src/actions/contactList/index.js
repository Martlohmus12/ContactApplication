export const RECEIVE_ALL_CONTACTS = 'RECEIVE_ALL_CONTACTS';

export function receiveContacts(contacts) {
    return {
      type: RECEIVE_ALL_CONTACTS,
      contacts
    };
}

export function fetchContacts(url) {
    return (dispatch) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        })
        .then((response) => response.json())
        .then(function (items) {
          dispatch(receiveContacts(items));
        })
        .catch((error) => console.log(error));
    };
  }