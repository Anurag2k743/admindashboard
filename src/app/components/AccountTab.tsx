const AccountTab=() =>{
    return (
      <div className='flex justify-center h-screen'>
        <div
          className='md:mt-44 w-[476px] h-[450px] p-[1px] rounded-xl shadow-[0px_10px_61px_0px_#ffffff2e]'
          style={{
            background: 'linear-gradient(to bottom right, rgba(255,255,255,0.45) -0.88%, rgba(255,255,255,0.3) 24.09%, rgba(255,255,255,0.2) 48.88%, rgba(255,255,255,0.45) 109.62%)'
          }}>
          <div className='rounded-xl w-full h-full bg-black p-4'>
            <div className='bg-[#191919] rounded-md flex flex-col justify-center items-center p-5 gap-2'>
              <span className='text-xl font-normal text-white'>Current Plan</span>
              <button className='py-1 px-5 rounded-full bg-[#2F2819] text-[#F4A618]'>Intermediate</button>
            </div>
 
            <div className='flex flex-col items-center'>
              <div className='mt-[78px] space-y-2.5'>
                <h2 className='text-6xl font-[570] text-[#10F2B0]'>500</h2>
                <h3 className='text-2xl font-[570] text-white'>Api Credits</h3>
              </div>
              <div className='mt-[78px]'>
                <p className='text-base font-[570] text-white'>Renews on 06/28/2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AccountTab;