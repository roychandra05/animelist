import React from 'react'

export const Comment = () => {
  return (
    <div className='w-full my-4'>
        <h3 className='bg-main-accent text-main-background font-bold pl-2 '>Comment</h3>
        <div className='flex flex-col gap-2'>
            <textarea className='bg-main-background border-2 border-main-accent text-main-shadow rounded-b-lg' placeholder='Write Comment Here ...'/>
            <button className='rounded-b-lg self-start px-4 py-1 bg-main-accent text-main-background font-bold'>Send</button>
        </div>
    </div>
  )
}
export default Comment