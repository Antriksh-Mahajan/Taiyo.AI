import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateContact } from '../contactActions'; // Replace 'your-redux-actions' with your actual Redux actions file
import { Link } from 'react-router-dom';


export default function EditContact({ contactId }) {
  const contact = useSelector(state =>
    state.contacts.find(contact => contact.id === contactId)
  );
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [status, setStatus] = useState(contact.status);

  const handleUpdate = () => {
    const updatedData = {
      firstName,
      lastName,
      status
    };
    dispatch(updateContact(contactId, updatedData));
  };

  return (
    <div className='bg-neutral-200 absolute '>
      <label htmlFor="" className='font-bold m-5 p-10 '>First Name:</label>
      <input
        type="text"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <br />
      <label htmlFor="" className='font-bold m-5 p-10 '>Last Name:</label>

      <input
        type="text"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <br />
      <label htmlFor="" className='font-bold m-5 p-10 '>Status:</label>

      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <br />
<div className='flex space-x-10 m-auto justify-center '>
      <button onClick={handleUpdate} className='bg-green-300 rounded-lg p-2'>Update</button>
      <button><Link to="/Dashboard" className='bg-red-300 rounded-lg p-2'>check back</Link></button>
      </div>
    </div>
  );
}
