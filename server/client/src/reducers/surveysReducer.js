import { FETCH_SURVEYS } from '../actions/actions';

const initialState = [];

const surveysReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
};

export default surveysReducer;
