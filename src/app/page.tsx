"use client";
import React, { useState } from 'react'
import AccountTab from './components/AccountTab'
import Ourpricing from './components/Ourpricing';
const page = () => {
      const [set , setstate] =  useState(true);

  return (
    <>
   
      {
        set ? <div className='h-screen'    onClick={()=>{setstate(false)}}> <AccountTab/> </div>: <div className=''><Ourpricing/></div>
      }

   
    </>
  )
}

export default page

