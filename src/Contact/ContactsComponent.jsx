import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../contactActions'; // Replace 'your-redux-actions' with your actual Redux actions file

export default function ContactsComponent() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className='flex flex-col space-y-5'>
      <button className='text-white bg-blue-400 rounded-sm p-1 m-5'>
        <Link to="/new-contact">Create Contact</Link>
      </button>

      {contacts.length === 0 ? (
        <h2 className='text-white text-center space-y-1 w-72x'>No Contact Found. Please add a contact by clicking the create button.</h2>
      ) : (
        contacts.map((contact) => (
          <div className='text-white' key={contact.id}>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>Status: {contact.status}</p>
            <button className='bg-blue-600 m-2 p-1 rounded-sm'>
              <Link to={`/edit-contact/${contact.id}`}>Edit Data</Link>
            </button>
            <button className='bg-red-500 m-2 p-1 rounded-sm' onClick={() => handleDelete(contact.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
