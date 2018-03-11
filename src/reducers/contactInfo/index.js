import * as actions from '../../actions/contactInfo';

export function contactInfo(state = [], action) {
  switch (action.type) {
    case actions.RECEIVE_CONTACT_INFO:
        console.log(action);
      return Object.assign({}, state, {
        contact: action.contact,
      })
    default:
      return state;
  }
}
