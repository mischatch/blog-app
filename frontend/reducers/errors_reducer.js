import merge from 'lodash/merge';
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';


export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
    debugger
      const errors = action.errors;
      return errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
}
