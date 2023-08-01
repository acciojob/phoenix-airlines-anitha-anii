// reducers.js
import * as actionTypes from './actionTypes';

// Your reducer logic here

const initialState = {
  // Your initial state here
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TRIP_TYPE:
      // Your logic for handling SET_TRIP_TYPE action
      return { ...state, tripType: action.payload };

    case actionTypes.SET_SOURCE_CITY:
      // Your logic for handling SET_SOURCE_CITY action
      return { ...state, sourceCity: action.payload };

    case actionTypes.SET_DESTINATION_CITY:
      // Your logic for handling SET_DESTINATION_CITY action
      return { ...state, destinationCity: action.payload };

    case actionTypes.SET_DATE_OF_JOURNEY:
      // Your logic for handling SET_DATE_OF_JOURNEY action
      return { ...state, dateOfJourney: action.payload };

    case actionTypes.BOOK_FLIGHT:
      // Your logic for handling BOOK_FLIGHT action
      return { ...state, bookedFlight: action.payload };

    case actionTypes.SET_BOOKING_DETAILS:
      // Your logic for handling SET_BOOKING_DETAILS action
      return { ...state, bookingDetails: action.payload };

    default:
      return state;
  }
};

export default reducer;
