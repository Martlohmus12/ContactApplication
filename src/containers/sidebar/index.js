import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Searchbar from '../../components/searchbar';
import Contact from '../../components/contact';
import ContactList from '../../components/contactList';
import { fetchContacts } from '../../actions/contactList';
import { selectContact } from '../../actions/contactInfo';
import config from '../../../config.js';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ''};
    }

    componentDidMount() {
        this.props.fetchContacts(config.contactUrl);
    }

    search = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
    }

    selectContact = (contact) => {
        this.props.selectContact(contact);
    }

    filterContacts = (contacts) => {
        return(
            contacts.filter(contact =>
                contact.firstname.includes(this.state.searchTerm) ||
                contact.lastname.includes(this.state.searchTerm) ||
                contact.email.includes(this.state.searchTerm) ||
                contact.mobile.includes(this.state.searchTerm)
            )
        );
    }

    render() {
        const { contacts = [] } = this.props;
        let filteredContacts;

        if (this.state.searchTerm) {
            filteredContacts = this.filterContacts(contacts).map((contact,i) => {
                return (
                    <Contact key={i} selectContact={ () => this.selectContact(contact)} contact={contact} />
                );
            });
        } else {
            filteredContacts = contacts.map((contact,i) => {
                return (
                    <Contact key={i} selectContact={ () => this.selectContact(contact)} contact={contact} />
                );
            });
        }

        return (
            <div className="sidebar">
                <Searchbar search={(e) => this.search(e)} />
                <ContactList contacts={filteredContacts} />
            </div>
        );
    }
}

Sidebar.propTypes = {
    contacts: PropTypes.array,
    fetchAllContacts: PropTypes.func,
    selectContact: PropTypes.func,
    selectContact: PropTypes.func,
    search: PropTypes.func,
};

function mapStateToProps(state) {
    return {
        contacts: state.contactsList.contacts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchContacts: (url) => dispatch(fetchContacts(url)),
        selectContact: (contact) => dispatch(selectContact(contact)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);