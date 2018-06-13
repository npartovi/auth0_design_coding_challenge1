import { combineReducers } from 'redux';
import ReducerProfile from './reducer_profiles';

const rootReducer = combineReducers({
  profiles: ReducerProfile
});

export default rootReducer;
