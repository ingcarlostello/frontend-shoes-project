import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { menShoesReducer } from "../reducers/menSectionReducer";

// @Reducers
import { slidesReducer } from "../reducers/slidesReducer";
import { womenShoesReducer } from "../reducers/womenSectionReducer";



const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
  

const reducers = combineReducers({
  slides:     slidesReducer,
  womenShoes: womenShoesReducer,
  menShoes:   menShoesReducer,
});

export const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));