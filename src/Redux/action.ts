import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from './actionTypes';

/**
 * Action creator for adding a contact.
 * @param payload - The contact data to be added.
 * @returns The action object with type and payload.
 */
export const addContact = (payload: any): { type: string; payload: any } => {
  console.log(payload); // Log the payload for debugging purposes
  return {
    type: ADD_CONTACT, // The action type
    payload,          // The data to be added as a contact
  };
};

/**
 * Action creator for removing a contact.
 * @param id - The ID of the contact to be removed.
 * @returns The action object with type and payload.
 */
export const removeContact = (id: number): { type: string; payload: { id: number } } => {
  return {
    type: REMOVE_CONTACT, // The action type
    payload: {
      id,                 // The ID of the contact to be removed
    },
  };
};

/**
 * Action creator for editing a contact.
 * @param payload - The updated contact data.
 * @returns The action object with type and payload.
 */
export const editContact = (payload: any): { type: string; payload: any } => {
  console.log(payload); // Log the payload for debugging purposes
  return {
    type: EDIT_CONTACT, // The action type
    payload,           // The updated contact data
  };
};