import * as actionTypes from './actionTypes';

export const setTripType = (tripType) => ({
  type: actionTypes.SET_TRIP_TYPE,
  payload: tripType,
});

export const setSourceCity = (sourceCity) => ({
  type: actionTypes.SET_SOURCE_CITY,
  payload: sourceCity,
});

export const setDestinationCity = (destinationCity) => ({
  type: actionTypes.SET_DESTINATION_CITY,
  payload: destinationCity,
});

export const setDateOfJourney = (dateOfJourney) => ({
  type: actionTypes.SET_DATE_OF_JOURNEY,
  payload: dateOfJourney,
});

export const bookFlight = (flightDetails) => ({
  type: actionTypes.BOOK_FLIGHT,
  payload: flightDetails,
});

export const setBookingDetails = (bookingDetails) => ({
  type: actionTypes.SET_BOOKING_DETAILS,
  payload: bookingDetails,
});
