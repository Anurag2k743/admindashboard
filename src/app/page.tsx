"use client";
import React, { useState } from 'react'
import AccountTab from './components/AccountTab'
import Ourpricing from './components/Ourpricing';
const page = () => {
      const [set , setstate] =  useState(true);

  return (
    <>
   
      {
        set ? <div className=''    onClick={()=>{setstate(false)}}> <AccountTab/> </div>:<Ourpricing/>
      }

   
    </>
  )
}

export default page

