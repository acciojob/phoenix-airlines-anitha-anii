import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './components/Landingpage';
import FlightSearchPage from './components/FlightSearchPage';
import FlightSearchResultsPage from './components/FlightSearchResultsPage';
import FlightBookingPage from './components/FlightBookingPage';
import ConfirmationPage from './components/ConfirmationPage';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/flight-search" element={<FlightSearchPage />} />
      <Route exact path="/flight-search-results" element={<FlightSearchResultsPage />} />
      <Route exact path="/flight-booking" element={<FlightBookingPage />} />
      <Route exact path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
};

export default App;
