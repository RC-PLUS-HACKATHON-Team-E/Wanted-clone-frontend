import {combineReducers} from 'redux'
import HomeReducer from './home'
import loginReducer from './login';
import { modalReducer } from './modal';


const RootReducer = combineReducers({
  auth: loginReducer,
  modal: modalReducer,
})

export default RootReducer
