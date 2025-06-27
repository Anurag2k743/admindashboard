import React from 'react'

const Current = () => {
    return (
        <>
            <div className='flex justify-center h-screen'>
                <div className='mt-44 w-[476px] h-[400px] md:h-[450px] p-[1px]  rounded-xl shadow-[0px_10px_61px_0px_#ffffff2e] 
                 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.45)_-0.88%,rgba(255, 255,255,0.3)_24.09%,rgba(255,255,255,0.2)_48.88%,rgba(255,255,255,0.45)_109.62%)]'>
                    <div className='rounded-xl w-full h-full bg-black p-4'>
                        <div className='bg-[#191919] rounded-md flex flex-col justify-center items-center p-5 gap-2'>
                            <span className='text-xl font-normal text-white'>Current Plan</span>
                            <button className='py-1 px-5 rounded-ful bg-[#2F2819]'>Intermediate</button>
                        </div>
                            
                        <div className='flex flex-col items-center'>
                            <div className='my-[20px] md:my-[78px] space-y-2.5 '>
                                <h2 className='text-6xl font-[570] text-white'>500</h2>
                                <h3 className='text-2xl font-[570] text-white'>Api Credits</h3>
                            </div>
                            <div className=''>
                                <p className='text-base font-[570] text-white'>Renews  on 06/28/2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Current
