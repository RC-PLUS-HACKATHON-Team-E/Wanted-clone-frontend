import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import RootReducer from './store/reducers'
import {composeWithDevTools} from 'redux-devtools-extension' // 리덕스 개발자 도구
import 'react-app-polyfill/stable'
import {GlobalStyle} from './components/styled'

const store = createStore(RootReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'),
)
