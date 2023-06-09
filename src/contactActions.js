// contactActions.js
export const CREATE_CONTACT = 'CREATE_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const createContact = (firstName, lastName, status) => {
  return {
    type: CREATE_CONTACT,
    payload: {
      firstName,
      lastName,
      status,
    },
  };
};

export const updateContact = (contactId, updatedData) => {
  return {
    type: UPDATE_CONTACT,
    payload: {
      contactId,
      updatedData
    }
  };
};

// In your Redux actions file

// Action type

// Action creator
export const deleteContact = (contactId) => {
  return {
    type: DELETE_CONTACT,
    payload: {
      contactId
    }
  };
};
