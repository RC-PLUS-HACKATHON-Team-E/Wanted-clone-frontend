import {combineReducers} from 'redux'
import HomeReducer from './home'
import loginReducer from './login';
import { modalReducer } from './modal';
import {likeReducer} from './like';


const RootReducer = combineReducers({
  auth: loginReducer,
  modal: modalReducer,
  like: likeReducer
})

export default RootReducer
