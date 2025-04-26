import React from 'react';


const Header = () => {
  return (
   <div className="header-main-div">
  <div className="header-navigation-div">
    <div>Stripe</div>
    <div>Products</div>
    <div>Solutions</div>
    <div>Developers</div>
    <div>Resources</div>
    <div>Pricing</div>
  </div>
  <div className='header-buttons-div'>
    <div><button>Sign In</button></div>
    <div><button>Contact Sales</button></div>
  </div>
  <div className="header-buttons-div"></div>
   </div>
  );
}

export default Header;