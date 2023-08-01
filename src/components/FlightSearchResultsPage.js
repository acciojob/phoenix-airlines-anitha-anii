import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FlightSearchResultsPage = () => {
  const { tripType, sourceCity, destinationCity, dateOfJourney } = useSelector(
    (state) => state.flight
  );
  let navigate = useNavigate();
  // Your logic to fetch flight search results based on the user's input
  // Replace the following placeholder with your actual API call or data retrieval logic
  const flightSearchResults = [
    { id: 1, airline: 'Airline 1', departure: 'City A', arrival: 'City B', date: '2023-08-10' },
    { id: 2, airline: 'Airline 2', departure: 'City A', arrival: 'City C', date: '2023-08-15' },
    { id: 3, airline: 'Airline 3', departure: 'City B', arrival: 'City A', date: '2023-08-20' },
    // Add more flight search results as needed
  ];

  // Function to handle click on a flight search result
  const handleFlightClick = (flightId) => {
    // Navigate to the FlightDetailPage passing the flightId as a parameter
    navigate(`/flight-detail/${flightId}`);
  };

  return (
    <div>
      {/* Display the flight search results */}
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


