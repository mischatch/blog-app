import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.currentUser });
    default:
      return state;
  }
};

export default SessionReducer;
