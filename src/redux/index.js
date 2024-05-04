// src/redux/index.js
import { createStore, combineReducers } from "redux";
import contactReducer from "./contactReducer";

const rootReducer = combineReducers({
  contact: contactReducer,
});

const store = createStore(rootReducer);

export default store;
