import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookFlight } from '../redux/actions';
import { useNavigate } from 'react-router';

const FlightBookingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bookedFlight = useSelector((state) => state.flight.bookedFlight);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleBooking = () => {
    // Do validation and other booking-related tasks
    const bookingDetails = {
      fullName,
      email,
      phone,
      flight: bookedFlight,
    };

    dispatch(bookFlight(bookingDetails));
    // You can redirect to the Confirmation Page here
    navigate('/confirmation');
  };

  return (
    <div>
      {/* Flight booking form */}
      <h2>Flight Booking</h2>
      <div>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
      </div>
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default FlightBookingPage;
