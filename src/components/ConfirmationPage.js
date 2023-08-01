import React from 'react';
import { useSelector } from 'react-redux';

const ConfirmationPage = () => {
  const bookingDetails = useSelector((state) => state.flight.bookingDetails);

  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Your flight has been successfully booked!</p>
      {/* Display the confirmation details */}
    </div>
  );
};

export default ConfirmationPage;
