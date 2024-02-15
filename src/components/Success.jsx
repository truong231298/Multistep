import React from 'react'
import iconCheck from "/images/icon-checkmark.svg"

const Success = () => {
  return (
    <div className='flex flex-col items-center text-center p-2 gap-4'>
      <img src={iconCheck} alt="" className='w-14 bg-Strawberry-red p-4 rounded-full'/>
      <h1 className='text-2xl font-semibold'>Thank you!</h1>
      <p className='text-gray-500'>Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com.
      </p>

    </div>
  )
}

export default Success