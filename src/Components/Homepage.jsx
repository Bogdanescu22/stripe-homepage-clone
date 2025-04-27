
import React from 'react'
import Header from './Header';

function HomePage() {
    return(
    <div className="home-page-main-div">
    <div className="home-page-hero-div">
    <Header />
    <div className='contain-main-div'>
    <main>
    <div className='div12'>
     <div className="grid-item"></div>
     
     <div className="grid-item"></div>
     <div className="hero-text-item"><h1 className='hero_h1'>Financial infrastructure to grow your revenue</h1></div>
     <div className="hero-p-item"><p>
      Join the millions of companies that use Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
    </p></div>
    </div>
    <div className='div34'>
     <div className="grid-item"></div>
     < div className="grid-item"></div>
    </div>


    </main>
    </div>
    </div>
    </div>
    )
    }


export default HomePage;


