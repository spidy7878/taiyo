// contactReducer.js
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from "./contactActionTypes";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContactsAdd = [...state.contacts, action.payload];
      localStorage.setItem("contacts", JSON.stringify(newContactsAdd));
      return {
        ...state,
        contacts: newContactsAdd,
      };
    case DELETE_CONTACT:
      const updatedContactsDelete = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContactsDelete));
      return {
        ...state,
        contacts: updatedContactsDelete,
      };
    case UPDATE_CONTACT:
      const updatedContactIndex = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      const updatedContactsEdit = [...state.contacts];
      updatedContactsEdit[updatedContactIndex] = action.payload;
      localStorage.setItem("contacts", JSON.stringify(updatedContactsEdit));
      return {
        ...state,
        contacts: updatedContactsEdit,
      };
    default:
      return state;
  }
};

export default contactReducer;
