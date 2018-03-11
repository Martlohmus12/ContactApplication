import * as actions from '../../actions/contactList';

export function contactsList(state = [], action) {
  switch (action.type) {
    case actions.RECEIVE_ALL_CONTACTS:
      return Object.assign({}, state, {
        contacts: action.contacts,
      })
    default:
      return state;
  }
}
