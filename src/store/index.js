import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import rootSaga from "./sagas";
export const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(sagaMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(sagaMiddleware, createLogger());
  }
};

/* istanbul ignore next */
export const configStore = (() => {
  const store = createStore(reducer, composeEnhancer(getMiddleware()));
  sagaMiddleware.run(rootSaga);
  return { store };
})();
