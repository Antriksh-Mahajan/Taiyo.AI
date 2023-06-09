// contactReducer.js
import { CREATE_CONTACT,UPDATE_CONTACT,DELETE_CONTACT } from './contactActions';

const initialState = {
  contacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts:[...state.contacts, action.payload],
      };
   
      case UPDATE_CONTACT:
        const { contactId, updatedData } = action.payload;
        const updatedContacts = state.contacts.map(contact => {
          if (contact.id === contactId) {
            return {
              ...contact,
              ...updatedData
            };
          }
          return contact;
        });
  
        return {
          ...state,
          contacts: updatedContacts
        };
        
        case DELETE_CONTACT:
          const { contactIds } = action.payload;
          const updatedContact = state.contacts.filter(contact => contact.id !== contactIds);
    
          return {
            ...state,
            contacts: updatedContact
          };


    default:
      return state;
  }
};




export default contactReducer;
