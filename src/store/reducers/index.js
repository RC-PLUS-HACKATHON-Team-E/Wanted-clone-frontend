import {combineReducers} from 'redux'
import HomeReducer from './home'
import loginReducer from './login';

const RootReducer = combineReducers({
  auth: loginReducer,
})

export default RootReducer
