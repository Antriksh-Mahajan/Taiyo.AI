import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='flex flex-col space-y-5 bg-sky-200 p-5 text-white font-semibold'>
            <button><Link>Contacts</Link></button>
            <button><Link>Charts and Maps</Link></button>
            <button><Link>Sidebar</Link></button>
    </div>
  )
}
