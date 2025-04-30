

import React, { useRef, useEffect } from 'react';
import Header from './Header';
import PhoneComponent from './PhoneComponent';

function HomePage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = 600; // Poți ajusta înălțimea până la cât vrei să meargă fundalul

      // Exemplu simplu de gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#a960ee');
      gradient.addColorStop(1, '#ff333d');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  return (
    <div className="home-page-main-div">
      <Header />

      {/* Canvas decorativ */}
      <canvas ref={canvasRef} className="hero-background-canvas" />

      <div className="contain-main-div">
        <main>
          <div className="grid-div div1">
            <h1>Financial infrastructure to grow your revenue</h1>
            <p className='hero-description'>
              Join the millions of companies that use Stripe to accept payments online and in person,
              embed financial services, power custom revenue models, and build a more profitable business.
            </p>
          </div>
          <div className="grid-div div2"></div>
          <div className="grid-div div3"></div>
          <div className="grid-div div4"><PhoneComponent /></div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;


 
