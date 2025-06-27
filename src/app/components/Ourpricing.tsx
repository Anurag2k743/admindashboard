import Image from 'next/image'

const pricingData = [
    {
        title: "Startup",
        price: "$10",
        duration: "/Month",
        tagline: "Perfect for individuals",
        features: [
            "5,000 words/month",
            "SEO assistant",
            "Custom tone presets",
            "Priority email support"
        ],
        buttonText: "Buy Now",
        buttonIcon: "/useradmin/left-arrow.svg"
    },
    {
        title: "Intermediate ",
        price: "$25",
        duration: "/Month",
        tagline: "Perfect for Teams",
        features: [
            "5,000 words/month",
            "SEO assistant",
            "Custom tone presets",
            "Priority email support"
        ],
        buttonText: "Buy Now",
        buttonIcon: "/useradmin/left-arrow.svg"
    },
    {
        title: "Corporate ",
        price: "$35",
        duration: "Monthly /Start 7-Day Trial",
        tagline: "For growing agencies",
        features: [
            "5,000 words/month",
            "SEO assistant",
            "Custom tone presets",
            "Priority email support"
        ],
        buttonText: "Buy Now",
        buttonIcon: "/useradmin/left-arrow.svg"
    },
    {
        title: "Basic",
        spacial: "For special requirements ",
        tagline: "Best for large organizations ",
        features: [
            "5,000 words/month",
            "SEO assistant",
            "Custom tone presets",
            "Priority email support"
        ],
        buttonText: "Contact",
        buttonIcon: "/useradmin/left-arrow.svg"
    },

];

const Ourpricing = () => {

    const handleClick = (title: string) => {
    alert(title)
  };


    return (
        <>
         <div className='h-screen text-white'>
            <div className='my-10 lg:my-20 flex flex-col items-center'>
                <button className='py-4 px-8 rounded-xl bg-[#27282b] font-semibold'>
                    Please select a plan below to activate
                </button>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='font-semibold text-[40px]'>Our Pricing</h2>
            </div>

            <div className='w-full max-w-[1280px] mx-auto mt-16'>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  2xl:grid-cols-4 gap-7'>
                    {pricingData.map((plan, index) => (
                        <div key={index} className='rounded-xl bg-[#131316] py-8 px-5 border border-[#2C2C30]'>

                                <div>
                                    <h3 className='font-semibold text-base'>{plan.title}</h3>
                                    <span className='text-base'>{plan.spacial}</span>
                                    <span className="text-[40px] font-semibold bg-gradient-to-b from-[#FEB401] to-[#B64BBE] bg-clip-text text-transparent">
                                        {plan.price}
                                    </span>
                                    <span className='text-xs font-semibold'>{plan.duration}</span>
                                </div>
                                <div className='mt-7'>
                                    <h4 className='text-xl font-semibold'>{plan.tagline}</h4>
                                    <ul className='mt-5 space-y-4 text-sm'>
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className='flex gap-2 items-center'>
                                                <Image src="/useradmin/check.svg" alt='' height={16} width={15} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex justify-center items-center py-2.5  w-full rounded-full relative z-0 mt-11 " onClick={() => handleClick(plan.title)}>
                                    <div className="absolute text-center inset-0 rounded-full p-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 z-[-1]">
                                        <div className="h-full w-full rounded-full bg-[#121212]"></div>
                                    </div>
                                    <span className='text-base font-semibold mr-2'>{plan.buttonText}</span>
                                    <Image src={plan.buttonIcon} height={20} width={20} alt='' />
                                </div>
    
                     </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    )
}

export default Ourpricing
