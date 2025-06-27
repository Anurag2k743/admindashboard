import Image from 'next/image';
import React from 'react';
const Purchaseapi = () => {
    return (

        <>
            <div className='mt-12 w-full max-w-[537px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-[40px] font-semibold '>Purchase API Credits</h2>
                </div>
                <div className='mt-7 py-9 flex justify-center items-center border-[#2C2C30] border rounded-xl'>
                    <div>
                        <h6 className='text-lg  font-semibold'>Startup</h6>
                        <span className="text-[40px] font-semibold bg-gradient-to-b from-[#FEB401] to-[#B64BBE] bg-clip-text text-transparent">$10</span>
                        <span className='text-xs font-semibold'>/Month</span>
                    </div>
                </div>
            </div>

            <div className='w-full max-w-[537px] mx-auto mb-52 relative'>
                <div className='py-8 border-[#2C2C30] border-b-1 flex flex-col justify-center items-center'>
                    <Image src="/useradmin/qrcode.svg" alt="" height={143} width={143} />
                    <span className='my-3 text-md  font-semibold'>Tap to copy address:</span>
                    <div className='flex gap-1 text-md  font-semibold'>
                        7EuKTWt9RmGShrEsjToeZ6hw6MGhXC8S9AzgepfRVetW
                        <Image src="/useradmin/copy.svg" alt="copyicon" height={24} width={24} />
                    </div>
                </div>
                <div className='py-8 border-b-1 border-[#2C2C30] text-center text-xl  font-semibold'>
                    Kindly send $10 of SOL to the above address
                </div>

                <div className='pt-8 px-5 flex gap-4 items-center relative'>
                    <label htmlFor="" className='text-md font-semibold'>Enter Transaction ID</label>
                    <input type="text" placeholder='paste here...' className='bg-black rounded-full py-2 px-2 placeholder:text-sm' />

                    <div className="inline-flex items-center gap-2 py-2 px-7  rounded-full relative z-0">
                        <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 z-[-1]">
                            <div className="h-full w-full rounded-full bg-[#121212]"></div>
                        </div>
                        <span className='font-[570] text-sm'>Submit</span>
                        <Image src="/useradmin/left-arrow.svg" height={12} width={12} alt='leftarrow' />
                    </div>
                </div>

                <div className='absolute top-24 left-[-99px] w-[123px] border-l-1 border-[#2C2C30]'>
                    <div className="relative left-[-5px]">
                        {/* Step 1 */}
                        <div className="flex items-center space-x-2 mb-52 mt-[-7px]">
                            <div className="w-[11px] h-[11px] bg-[#FFB700] rounded-full" />
                            <span className="text-sm">STEP 1</span>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-center space-x-2 mb-20 z-10">
                            <div className="w-[11px] h-[11px] bg-[#FFB700] rounded-full" />
                            <span className="text-sm">STEP 2</span>
                        </div>

                        {/* Step 3 */}
                        <div className="flex items-center space-x-2 z-10">
                            <div className="w-[11px] h-[11px] bg-[#FFB700] rounded-full" />
                            <span className="text-sm">STEP 3</span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Purchaseapi;


