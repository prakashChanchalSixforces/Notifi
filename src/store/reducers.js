import {combineReducers} from 'redux';
import SignUp from './reducers/SignUp.reducer'
import Login from './reducers/Login.reducer'
import DashboardReducers from './reducers/DashboardReducer';
const appReducers = combineReducers({
  SignUp:SignUp,
  Login:Login,
  Dashboard:DashboardReducers
});

const Reducer = (state, action) => {
  return appReducers(state, action);
};

export default Reducer;
