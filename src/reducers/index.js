import { combineReducers } from 'redux';
import { contactsList } from './contactList'
import { contactInfo } from './contactInfo'

const rootReducer = combineReducers({
    contactsList,
    contactInfo
});

export default rootReducer;