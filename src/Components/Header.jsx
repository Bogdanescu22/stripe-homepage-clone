import React from 'react';


const Header = () => {
  return (
   <div className="header-main-div">
  <div className="header-navigation-div">
    <div><img src="src/assets/stripe-ar21.svg"></img></div>
    <div><p>Products</p></div>
    <div><p>Solutions</p></div>
    <div><p>Developers</p></div>
    <div><p>Resources</p></div>
    <div><p>Pricing</p></div>
  </div>
  <div className='header-buttons-div'>
    <div><p>Sign In</p></div>
    <button className="contact-sales-button">Contact Sales</button>
  <div className="header-buttons-div"></div>
   </div>
   </div>
  );
}

export default Header;