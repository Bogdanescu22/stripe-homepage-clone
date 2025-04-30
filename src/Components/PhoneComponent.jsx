import React from 'react';



function PhoneComponent() {
return(
<div className='phone-component-main-div'>
 <div className='phone-div'>
   <div className='phone-screen-div'>
     <div>
        <img src='src/assets/stripe-ar21.svg'></img>
        <p className='phone-screen-p1'>Abstraction Magazine</p>
        <p className='phone-screen-p2'>19 lei per month</p>
        <div className='phone-screen-apple-button'><img src="public/apple-pay.png"></img></div>
    </div>
    <div>
       <div className='separator'>Or pay with card</div> 
       <p>Email</p>
       <div></div>
       <p>Card Information</p>
       <div className='phone-screen-pay-card-div1'><div>Numeber</div><div><img></img><img></img></div></div>
       <div className="phone-screen-pay-card-div1">
        <div>MM/YY</div>
        <div>CVC
          <div><img></img></div>
        </div>
        <p>Country or region</p>
        <div>United states</div>
        <div>ZIP</div>
        <div className='phone-screen-pay-button'>Pay</div>
       </div>
    </div>
     

   </div>




 </div>
 <div className='graphic-div'></div>

</div>
)
}





export default PhoneComponent
