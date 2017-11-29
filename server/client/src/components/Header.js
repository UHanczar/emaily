import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
        <a href='#!' className='brand-logo left'>Logo</a>
        <a href='#' data-activates='mobile-demo' className='button-collapse right'><i className='material-icons'>menu</i></a>
        <ul className='right hide-on-med-and-down'>
          <li><a href='#'>Login With Google</a></li>
        </ul>
        <ul className='side-nav' id='mobile-demo'>
          <li><a href='#'>Login with Google</a></li>
        </ul>
      </div>
      </nav>
    );
  }
}

export default Header;
