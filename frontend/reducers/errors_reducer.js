import merge from 'lodash/merge';
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';



const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
