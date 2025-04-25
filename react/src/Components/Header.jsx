import React from 'react';


function Header() {
  return (
    <div className='header-main-div'>
      <div className="header-navigation-div">
        <div className='header-logo-div'>Logo</div>
        <div className='header-navigation-button-div'><p>Products</p></div>
        <div className='header-navigation-button-div'><p>Solutions</p></div>
        <div className="header-navigation-button-div"><p>Developers</p></div>
        <div className='header-navigation-button-div'><p>Resources</p></div>
        <div className='header-navigation-button-div'><p>Pricing</p></div>
      </div>
      <div className='header-buttons-div'>
        <div className='header-login-button-div'><button>Login</button></div>
        <div className='header-signup-button-div'><button>Sign Up</button></div>
      </div>
    </div>
  );
}


export default Header