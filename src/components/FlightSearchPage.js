import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
import { useNavigate } from 'react-router';
const FlightSearchPage = () => {
    let navigator=useNavigate();
  const dispatch = useDispatch();
  const [tripType, setTripType] = useState('one-way');
  const [sourceCity, setSourceCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [dateOfJourney, setDateOfJourney] = useState('');

  const handleSearch = () => {
    dispatch(actions.setTripType(tripType));
    dispatch(actions.setSourceCity(sourceCity));
    dispatch(actions.setDestinationCity(destinationCity));
    dispatch(actions.setDateOfJourney(dateOfJourney));
    // You can redirect to the Flight Search Results Page here
    navigator('/flight-search-results');
  };

  return (
    <div>
      {/* Flight search form */}
      <h2>Flight Search</h2>
      <div>
        <label>
          Trip Type:
          <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
            <option value="one-way">One-Way</option>
            <option value="round-trip">Round Trip</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Source City:
          <input type="text" value={sourceCity} onChange={(e) => setSourceCity(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Destination City:
          <input
            type="text"
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
          />
        </label>
      </div>
      <div> 
        <label>
          Date of Journey:
          <input
            type="date"
            value={dateOfJourney}
            onChange={(e) => setDateOfJourney(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FlightSearchPage;

