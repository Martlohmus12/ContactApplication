import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar">
        <input
          onChange={(e) => {this.props.search(e)}}
          type="search"
          autoComplete="off"
          id="search"
          placeholder="Search..."
        />
      </div>
    );
  }
}

Searchbar.propTypes = {
  search: PropTypes.func
};

export default Searchbar;

