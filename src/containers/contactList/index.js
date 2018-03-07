import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ContactList extends Component {

  render() {

    return (
      <div className="contactList">
        contactInfo
      </div>
    );
  }
}

ContactList.PropTypes = {

};

function mapStateToProps(state) {
  return {

  };
}


function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);