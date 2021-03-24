import { FETCH_LOCATION } from "../constants";

const initialeState = [];

const locationReducer = (state = initialeState, action) => {
  switch (action.type) {
    case FETCH_LOCATION:
      return action.payload;
    default:
      return state;
  }
};

export default locationReducer;
