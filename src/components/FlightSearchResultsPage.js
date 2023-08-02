import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FlightSearchResultsPage = () => {
  const { tripType, sourceCity, destinationCity, dateOfJourney } = useSelector(
    (state) => state.flight
  );
  let navigate = useNavigate();
  
  const flightSearchResults = [
    { id: 1, airline: 'Airline 1', departure: 'City A', arrival: 'City B', date: '2023-08-10' },
    { id: 2, airline: 'Airline 2', departure: 'City A', arrival: 'City C', date: '2023-08-15' },
    { id: 3, airline: 'Airline 3', departure: 'City B', arrival: 'City A', date: '2023-08-20' },
   
  ];

  const handleFlightClick = (flightId) => {
       navigate(`/flight-detail/${flightId}`);
  };

  return (
    <div>
           <h2>Flight Search Results</h2>
      <ul>
        {flightSearchResults.map((flight) => (
          <li key={flight.id} onClick={() => handleFlightClick(flight.id)}>
            <p>Airline: {flight.airline}</p>
            <p>Departure: {flight.departure}</p>
            <p>Arrival: {flight.arrival}</p>
            <p>Date: {flight.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightSearchResultsPage;


