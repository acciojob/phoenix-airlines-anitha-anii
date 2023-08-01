import React from 'react';
import { useNavigate } from 'react-router';

const LandingPage = () => {
    let navigator =useNavigate();

    function landingtosearch(){
        navigator('/flight-search');
    }
  return (
    <div>
      <h1>Welcome to Our Flight Booking Website!</h1>
      <p>Find the best deals on flights and book your journey with ease.</p>
      {/* Add your landing page content here */}
      <button onClick={landingtosearch}>Search for flight</button>
    </div>
  );
};

export default LandingPage;
