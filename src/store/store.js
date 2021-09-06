import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// @Reducers
import { slidesReducer } from "../reducers/slidesReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
  

const reducers = combineReducers({
    slides: slidesReducer
})

export const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));