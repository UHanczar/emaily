import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

  render() {
    const renderContent = () => {
      switch (this.props.auth) {
        case null:
          return null;
        case false:
          return <li><a href='/auth/google'>Login With Google</a></li>;
        default:
          return <li><a href='/api/logout'>Logout</a></li>
      }
    }

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

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
};

export default connect(mapStateToProps)(Header);
