import React from 'react'
import { Sidebar } from '../components/Sidebar'

export const TesteDash = () => {
  return (
    <div className='bg-green-100 w-full h-screen p-5'>
      <div className='bg-green-100 w-full h-full flex rounded-lg justify-between gap-2'>

        <Sidebar />
        <main className='bg-[#EAF8F1] rounded-lg flex-1 h-full'>

        </main>

      </div>
    </div>
  )
}
