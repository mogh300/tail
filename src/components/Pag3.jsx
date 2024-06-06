import React from 'react'

const Pag3 = () => {
  return (
    <div className=' bg-sher text-bas  '>
      <div className=' flex justify-between mx-16 max-md:mx-8 max-sm:mx-2  items-center  max-md:hidden'>
        <li className=' flex gap-16 text-bas  ' >
          <ul className=' text-2xl'>IT Website</ul>
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Pricing</ul>
          <ul>Blog</ul>
        </li>
        <button className=' bg-s m-1 py-3 px-9 rounded-full text-lg hover:text-bas hover:shadow-bas hover:transition '> Contact No </button>
      </div>
      <div className='flex  mx-16 max-md:mx-8 max-sm:mx-2 mt-20 max-md:flex-col'>
        <div>
          <h1 className=' text-6xl pt-20' >Launch a software businesses website today with us!</h1>
          <p className=' py-10'>Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.</p>
          <button className=' bg-s m-1 py-3 px-9 rounded-full text-lg hover:text-bas hover:shadow-bas hover:transition '> Contact No </button>
        </div>
        <img src=".\img2\z.png" alt="" />
      </div>
    </div>
  )
}

export default Pag3