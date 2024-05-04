// src/redux/contactActions.js
import { ADD_CONTACT } from "./contactActionTypes";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});
