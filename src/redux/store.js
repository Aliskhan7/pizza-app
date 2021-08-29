import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
// const logger = createLogger({
//   diff: true,
//   collapsed: true,
// });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;