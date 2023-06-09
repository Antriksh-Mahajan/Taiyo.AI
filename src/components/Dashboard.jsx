import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import ContactsComponent from '../Contact/ContactsComponent';
export default function Dashboard() {
  return (
    <div className=' w-1/2 bg-slate-600'>
      <Header/>
      <div className='flex '>
      <Sidebar/>
        <div className=' items-center flex m-auto space-y-7'>
      <ContactsComponent/>
        </div>
      </div>
    </div>
  )
}
