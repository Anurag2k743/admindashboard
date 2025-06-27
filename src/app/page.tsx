"use client";
import React, { useState } from 'react';
import AccountTab from './components/AccountTab';
import Ourpricing from './components/Ourpricing';

const Page = () => {
  const [showAccount, setShowAccount] = useState(true);

  return (
    <>
      {
        showAccount
          ? <div className='h-screen' onClick={() => setShowAccount(false)}><AccountTab /></div>
          : <div><Ourpricing /></div>
      }
    </>
  );
};

export default Page;
