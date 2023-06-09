import React from 'react';
import { useSelector } from 'react-redux';


const MyComponent = () => {
    const contacts = useSelector((state) => state.contacts);
  
    // Access the contacts data and render it
    return (
      <div>
        <h2>het</h2>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>Status: {contact.status}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default MyComponent;
