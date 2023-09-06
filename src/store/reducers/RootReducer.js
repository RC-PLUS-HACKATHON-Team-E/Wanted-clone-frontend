import {combineReducers} from 'redux'
import HomeReducer from './home'
import loginReducer from './login';
import { modalReducer } from './modal';
import {likeReducer} from './like';
import recruitReducer  from './recruit';
import { avatarReducer } from "./avatar";
import likedNameReducer from "./likedName";
import recruitAllReducer from "./recruitAll";

const RootReducer = combineReducers({
  auth: loginReducer,
  modal: modalReducer,
  like: likeReducer,
  recruit : recruitReducer,
  avatar : avatarReducer,
  likedName : likedNameReducer,
  recruitAll : recruitAllReducer
})

export default RootReducer
