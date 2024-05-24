import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from "./actionTypes";
import Swal from "sweetalert2";

// Define the shape of a contact
interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  mob: string;
}

// Define the shape of the state
interface State {
  contacts: Contact[];
}

// Define the shape of action payloads
interface AddContactAction {
  type: typeof ADD_CONTACT;
  payload: Omit<Contact, 'id'>; // Exclude 'id' from payload as it will be generated
}

interface RemoveContactAction {
  type: typeof REMOVE_CONTACT;
  payload: { id: number };
}

interface EditContactAction {
  type: typeof EDIT_CONTACT;
  payload: Contact;
}

type Action = AddContactAction | RemoveContactAction | EditContactAction;

const initialState: State = {
  contacts: JSON.parse(localStorage.getItem("contacts") || '[]'),
};

const validateName = (name: string): boolean => {
  const nameRegex = /^[A-Za-z ]+$/;
  return nameRegex.test(name);
};

const validateMobile = (mob: string): boolean => {
  const mobRegex = /^[0-9]{10}$/;
  return mobRegex.test(mob);
};

export default function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ADD_CONTACT: {
      let flag = 0;
      if (
        action.payload.first_name === "" ||
        action.payload.last_name === "" ||
        action.payload.mob === ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All fields are required.",
        });
        flag = 1;
      } else if (!validateName(action.payload.first_name) || !validateName(action.payload.last_name)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Name must contain only letters.",
        });
        flag = 1;
      } else if (!validateMobile(action.payload.mob)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Mobile number must be 10 digits.",
        });
        flag = 1;
      } else {
        state.contacts.forEach((el) => {
          if (
            el.first_name === action.payload.first_name &&
            el.last_name === action.payload.last_name
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Name already exists in contacts.",
            });
            flag = 1;
          }
          if (el.mob === action.payload.mob) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Mobile number already exists in contacts.",
            });
            flag = 1;
          }
        });
      }

      if (!flag) {
        Swal.fire({
          icon: "success",
          title: "Wow",
          text: "Contact saved successfully!",
        });

        let updatedContacts: Contact[] =
          JSON.parse(localStorage.getItem("contacts") || '[]');
        updatedContacts.push({
          id: state.contacts.length + 1,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          mob: action.payload.mob,
        });
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
        return {
          ...state,
          contacts: [...updatedContacts],
        };
      }
      return state;
    }

    case REMOVE_CONTACT: {
      let Contacts: Contact[] = JSON.parse(localStorage.getItem("contacts") || '[]');
      let updatedContacts = Contacts.filter(
        (el) => el.id !== action.payload.id
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return {
        ...state,
        contacts: [...updatedContacts],
      };
    }

    case EDIT_CONTACT: {
      if (
        action.payload.first_name === "" ||
        action.payload.last_name === "" ||
        action.payload.mob === ""
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All fields are required.",
        });
        return state;
      } else if (!validateName(action.payload.first_name) || !validateName(action.payload.last_name)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Name must contain only letters.",
        });
        return state;
      } else if (!validateMobile(action.payload.mob)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Mobile number must be 10 digits.",
        });
        return state;
      } else {
        let flag = 0;
        let Contacts: Contact[] = JSON.parse(localStorage.getItem("contacts") || '[]');

        Contacts.forEach((el) => {
          if (
            el.id !== action.payload.id &&
            el.first_name === action.payload.first_name &&
            el.last_name === action.payload.last_name
          ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Name already exists!",
            });
            flag = 1;
            return state;
          }
          if (el.id !== action.payload.id && el.mob === action.payload.mob) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Mobile number already exists!",
            });
            flag = 1;
            return state;
          }
        });

        if (flag) {
          return state;
        } else {
          let updatedContacts = Contacts.map((el) => {
            if (el.id === action.payload.id) {
              return { ...action.payload };
            } else {
              return el;
            }
          });
          localStorage.setItem("contacts", JSON.stringify(updatedContacts));
          Swal.fire({
            icon: "success",
            title: "Wow",
            text: "Contact has been updated.",
          });
          return {
            ...state,
            contacts: state.contacts.map((el) => {
              if (el.id === action.payload.id) {
                return { ...action.payload };
              } else {
                return el;
              }
            }),
          };
        }
      }
    }

    default:
      return state;
  }
}