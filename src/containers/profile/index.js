import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactInfo from '../../components/contactInfo';
import InitialContact from '../../components/initialContact';

class Profile extends Component {

  render() {
    const {contact = {}} = this.props;

    return (
        <div className="profile">
            { Object.keys(contact).length !== 0 ?
                <ContactInfo contact={contact}/>
            :
                <InitialContact />
            }
        </div>
    );
  }
}

Profile.propTypes = {
    contact: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    contact: state.contactInfo.contact
  };
}

export default connect(mapStateToProps)(Profile);