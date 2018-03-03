import Main from './main';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';


const mapStateToProps = state => {

  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
