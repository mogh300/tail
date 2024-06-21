import React from 'react'

const Mid = () => {
  return (
   

    <section className=' bg-background mt-28  flex flex-col  justify-between container   '>
      <div className='  flex  flex-col  text-center '>
        <h1 className=' text-4xl font-bold '>About me</h1>
        <p className=' text-p pt-5 text-2xl' >Designing solutions, not just a visuals!</p>
      </div>
      <div className=' flex flex-row-reverse mt-9 max-md:text-center  z-20  '>
        <img src="./img/about illustration.png" alt="" />
      <div className='    ' >
       <div className='mt-6   '>
                <button className=' mt-20 rounded-2xl w-10  bg-rose-400   text-white' >01</button>
                <h2 className=' py-4 text-2xl '>1K+ complete project</h2>
                <p className=' text-InkScribe' >Stacks is a production-ready library of stackable content blocks built in React Native</p>
              </div>
              <div className='mt-10 '>
                <button className=' rounded-2xl w-10  bg-slate-500  text-white' >02</button>
                <h2 className='py-4 text-2xl '>8+ years of experience</h2>
                <p className=' text-InkScribe ' >Stacks is a production-ready library of stackable content blocks built in React Native</p>
                <button className=' max-md:hidden mt-4 flex justify-center  bg-scenery w-44 rounded-3xl  text-white  gap-5 text-center px-2 items-center  hover:bg-primary hover:text-black   h-12'>Download CV👉</button>
              </div>
         </div>
      </div>
  
  
    </section>
 
  )
}

export default Mid