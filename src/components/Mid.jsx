import React from 'react'
import YellowButton from './YellowButton'
const Mid = () => {
  return (
    <section className=' relative  mt-28  z-0 container' >
      <img className='lg:absolute -start-10 max-lg:hidden max-h-screen -z-10' src=".\img\Ellipse 1328.png" />  
        <h1 className=' text-4xl font-bold text-center'>About me</h1>
        <p className='  text-InkScribe my-5 text-2xl text-center' >Designing solutions, not just a visuals!</p>
      <div className=' flex flex-col lg:flex-row my-9  text-center md:text-left z-20'>
      <div>
       <div className='my-10 z-0'>
                <button className=' mt-20 rounded-2xl w-10  bg-rose-400   text-white' >01</button>
                <h2 className=' py-4 text-2xl '>1K+ complete project</h2>
                <p className=' text-InkScribe' >Stacks is a production-ready library of stackable content blocks built in React Native</p>
              </div>
              <div >
                <button className=' rounded-2xl w-10  bg-slate-500  text-white' >02</button>
                <h2 className='py-4 text-2xl '>8+ years of experience</h2>
                <p className=' pb-4 text-InkScribe ' >Stacks is a production-ready library of stackable content blocks built in React Native</p>
                <YellowButton>Download CV👉</YellowButton>
              </div>
         </div>
         <img src="./img/about illustration.png"/>
      </div>
    </section>
  )
}
export default Mid