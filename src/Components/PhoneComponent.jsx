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
    </div>


   </div>




 </div>
 <div className='graphic-div'></div>

</div>
)
}





export default PhoneComponent
