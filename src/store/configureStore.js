import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; // Redux DevTools를 사용하기 위한 임포트
import RootReducer from "./reducers/RootReducer";

const middleware = [thunk];

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
