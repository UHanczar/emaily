import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Payments from './Payments';

class Header extends Component {

  render() {
    const renderContent = () => {
      switch (this.props.auth) {
        case null:
          return null;
        case false:
          return <li><a href='/auth/google'>Login With Google</a></li>;
        default:
          return [
            <li key='1'><Payments /></li>,
            <li key='2' style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
            <li key='3'><a href='/api/logout'>Logout</a></li>
          ];
      }
    };

    return (
      <nav>
        <div className='nav-wrapper'>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className='brand-logo left'
          >Emaily</Link>
          <ul className='right'>
            {renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.object.isRequired
  ]),
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
