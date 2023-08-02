import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import FlightBookingPage from './components/FlightBookingpage';
import FlightSearchResultsPage from './components/FlightSearchResultsPage';
import FlightSearchPage from './components/FlightSearchPage';
import ConfirmationPage from './components/ConfirmationPage';

const App = () => {      
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/flight-search" element={<FlightSearchPage />} />
      <Route path="/flight-search-results" element={<FlightSearchResultsPage />} />
      <Route path="/flight-booking" element={<FlightBookingPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
};

export default App;

