import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const ConfirmationPage = () => {
  let navigator=useNavigate();
  const bookingDetails = useSelector((state) => state.flight.bookingDetails);

  function backtohome(){
    navigator('./components/Landingpage');
        }
  return (

       <div>
      <h2>Booking Confirmation</h2>
      <p>Your flight has been successfully booked!</p>
     
      <button onClick={backtohome}>Back to Home</button>
    </div>
  );
};

export default ConfirmationPage;
