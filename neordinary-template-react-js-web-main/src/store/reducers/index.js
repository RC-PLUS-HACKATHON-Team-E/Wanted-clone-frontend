import {combineReducers} from 'redux'
import HomeReducer from './home'
import LoginReducer from './login'

const RootReducer = combineReducers({
  HomeReducer,
  LoginReducer,
})

export default RootReducer
