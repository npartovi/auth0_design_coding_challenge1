import { combineReducers } from 'redux';
import ReducerProfile from './reducer_profiles';
import FilterReducer from './filter_reducer';

const rootReducer = combineReducers({
  profiles: ReducerProfile,
  filter: FilterReducer
});

export default rootReducer;
