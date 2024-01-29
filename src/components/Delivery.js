import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 sm:grid-cols-1'>
            <img className='w-[550px] mx-auto my-4' src='https://previews.123rf.com/images/prarinya9/prarinya92005/prarinya9200500177/148014911-food-delivery-service-fast-food-delivery-scooter-delivery-service-vector-illustration.jpg' alt='' />
        
            <div className='flex flex-col justify-center'>
                 <p className='text-[#00df9a] font-bold'>Get the App</p>
                 <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
                 <p>
                  Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                 </p>
                 <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>

            </div>
        </div> 
    </div>  
  )
}

export default Delivery
