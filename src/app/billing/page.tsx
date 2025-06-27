import React from 'react'

const page = () => {
  return (
    <div className='h-screen'>
      <div className='flex justify-center'>
        <div
          className='md:mt-44 w-full lg:-[1067px] h-[212px] p-[1px] rounded-xl shadow-[0px_10px_61px_0px_#ffffff2e]'
          style={{
            background: 'linear-gradient(to bottom right, rgba(255,255,255,0.45) -0.88%, rgba(255,255,255,0.3) 24.09%, rgba(255,255,255,0.2) 48.88%, rgba(255,255,255,0.45) 109.62%)'
          }}>
          <div className='rounded-xl w-full h-full bg-black p-4 overflow-x-scroll md:overflow-hidden'>
            <table className="w-full text-sm text-left border-collapse text-white">
              <thead className="bg-[#191919] text-white border-b-1 ">
                <tr>
                  <th className="px-4 py-3">SR. NO</th>
                  <th className="px-4 py-3">Transaction ID</th>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">API Credits</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="bg-black">
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3 truncate max-w-xs">
                    57894562157894585789456215789458
                  </td>
                  <td className="px-4 py-3">Startup</td>
                  <td className="px-4 py-3">500</td>
                  <td className="px-4 py-3">05/15/2025</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='flex justify-center items-center mt-20'>
            <div className="inline-flex items-center gap-2 py-2 px-10 rounded-full relative z-0">
              <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 z-[-1]">
                <div className="h-full w-full rounded-full bg-[#121212]"></div>
              </div>
              <span className='font-[570] text-lg text-white'>Purchase API Credis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
