// import React from 'react'

// const Apitable = () => {
//   return (

//     <>
//       <div className='w-full max-w-[885px] mx-auto h-screen'>
//         <div className='flex justify-center items-center mt-16 '>
//           <div className="inline-flex items-center gap-2 py-3 px-14 rounded-full relative z-0">
//             <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 z-[-1]">
//               <div className="h-full w-full rounded-full bg-[#121212]"></div>
//             </div>
//             <span className='font-semibold text-lg'>Generate API Key</span>
//           </div>
//         </div>

//         <div className='mt-14'>
//           <div
//             className='w-full h-[300px] p-[1px] rounded-xl shadow-[0px_10px_61px_0px_#ffffff2e]'
//             style={{
//               background: 'linear-gradient(to bottom right, rgba(255,255,255,0.45) -0.88%, rgba(255,255,255,0.3) 24.09%, rgba(255,255,255,0.2) 48.88%, rgba(255,255,255,0.45) 109.62%)'
//             }}>
//             <div className='rounded-xl w-full h-full bg-black  p-5'>

//              hkjj
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Apitable


"use client";
import { useState } from "react";

const initialKeys = [
  {
    id: 1,
    key: "sk_test_1234567890abcdef1234567890abcdef",
    date: "05/15/2025",
  },
  {
    id: 2,
    key: "sk_test_1234567890abcdef1234567890abcdef",
    date: "05/15/2025",
  },
  {
    id: 3,
    key: "sk_test_1234567890abcdef1234567890abcdef",
    date: "05/15/2025",
  },
  {
    id: 4,
    key: "sk_test_1234567890abcdef1234567890abcdef",
    date: "05/15/2025",
  },
];

export default function Apitable() {
  const [apiKeys, setApiKeys] = useState(initialKeys);

  const handleCopy = (key: string) => {
    navigator.clipboard.writeText(key);
    toast.success("API Key copied!");
  };

  const handleDelete = (id: number) => {
    setApiKeys((prev) => prev.filter((key) => key.id !== id));
    toast.success("API Key deleted!");
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="rounded-xl   shadow-md overflow-hidden bg-black/90">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-3">SR. NO</th>
              <th className="px-4 py-3">API Keys</th>
              <th className="px-4 py-3">Date Created</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {apiKeys.map((item, index) => (
              <tr key={item.id} className="border-t border-gray-800 text-white">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 flex items-center gap-2 truncate">
                  <span className="truncate max-w-xs">{item.key}</span>
                  {/* <Copy
                    className="cursor-pointer text-white hover:text-blue-400"
                    size={16}
                    onClick={() => handleCopy(item.key)}
                  /> */}
                </td>
                <td className="px-4 py-3">{item.date}</td>
                <td className="px-4 py-3">
                  {/* <Trash2
                    className="cursor-pointer text-red-500 hover:text-red-700"
                    size={16}
                    onClick={() => handleDelete(item.id)}
                  /> */}
                </td>
              </tr>
            ))}
            {apiKeys.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-400">
                  No API keys found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
