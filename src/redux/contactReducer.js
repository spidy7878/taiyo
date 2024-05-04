// src/redux/contactReducer.js
import { ADD_CONTACT } from "./contactActionTypes";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, action.payload];
      localStorage.setItem("contacts", JSON.stringify(newContacts));
      return {
        ...state,
        contacts: newContacts,
      };
    default:
      return state;
  }
};

export default contactReducer;
