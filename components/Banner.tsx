import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
        <div>
            <h1 className='text-3xl md:text-5xl font-bold'>Welcome to the Studio</h1>
            <h2 className='mt-5 md:mt-0'>
                Welcome to{" "}
                <span className='underline decoration-4 decoration-[#F7AB0A]'>
                    Every Developer

                </span>{" "}
                favourite place to learn and grow
            </h2>
        </div>
        <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
            New produt features | The latest in technology | The weekly
            debugging
            nightmares & More!

        </p>
    </div>
  )
}

export default Banner
