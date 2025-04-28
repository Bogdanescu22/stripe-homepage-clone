
import React from 'react'
import Header from './Header';

function HomePage() {
    return(
    <div className="home-page-main-div">
    <Header />
    <div className='contain-main-div'>
      <main>
         <div className='grid-div div1'>
            <h1>Financial infrastructure to grow your revenue</h1>
            <p>Join the millions of companies that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.  
            </p>
         </div>
         <div className='grid-div div2'></div>
         <div className='grid-div div3'></div>
         <div className='grid-div div4'></div>
      </main>
    </div>
    </div>
    )
    }


export default HomePage;


