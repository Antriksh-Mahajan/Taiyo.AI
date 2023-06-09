// NewContact.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from '../contactActions';
import {Link} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
const NewContact = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('active');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createContact(firstName, lastName, status));
    // Reset form fields
    setFirstName('');
    setLastName('');
    setStatus('active');
  };

  return (
    <div className='relative left-96 top-52 w-1/2  text-center'>
    <Header/>
    
    <div className='flex'>

    <div className='w-1/2 '>
   <  Sidebar/>
    </div>
<div className=' w-1/2 '>

<h2 className='text-cyan-500 text-3xl font-bold underline'>Create Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='font-semibold'>First Name:</label>
          <input className='border-blue-500'
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label className='font-semibold'>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label className='font-semibold'>Status:</label>
          <label>
            <input
            
              type="radio"
              value="active"
              checked={status === 'active'}
              onChange={() => setStatus('active')}
            />{' '}
            Active
          </label>
          <label>
            <input
              type="radio"
              value="inactive"
              checked={status === 'inactive'}
              onChange={() => setStatus('inactive')}
            />{' '}
            Inactive
          </label>
        </div>
        <div className=' space-x-4'>
        <button type="submit" className='rounded-md bg-slate-600 p-2 text-white '>Create</button>
        <button className='rounded-md bg-orange-300 p-2 text-white '><Link to="/edit-contact">EditData</Link></button>
        <button className='rounded-lg bg-slate-600 p-2 text-white'><Link to="/Dashboard">Back page</Link></button>
        </div>
      </form>
</div>
    </div>


     
    </div>
  );
};

export default NewContact;
