import React from 'react'

const Absolute = () => {
    const Talk =[
        {
          id:0,
          title:'⭐️⭐️⭐️⭐️⭐️',
          point:'Yet preference connection unpleasant yet melancholy but end  appearance. And excellence partiality estimating terminated day everything.',
          profile:'sam',
          adress:'Founder @ Migelko'
        },
        {
          id:0,
          title:'⭐️⭐️⭐️⭐️⭐️',
          point:'Yet preference connection unpleasant yet melancholy but end  appearance. And excellence partiality estimating terminated day everything.',
          profile:'sam',
          adress:'Founder @ Migelko'
        },
        {
          id:0,
          title:'⭐️⭐️⭐️⭐️⭐️',
          point:'Yet preference connection unpleasant yet melancholy but end  appearance. And excellence partiality estimating terminated day everything.',
          profile:'sam',
          adress:'Founder @ Migelko'
        },
    
      ]
  return (
    <>
         {Talk.map((item) => (
          <div  key={Talk.id} className=" p-16 bg-white md:text-left shadow-md rounded-3xl ">
          <h1 className=" py-2 "> {item.title}</h1>
           <p className=" text-InkScribe  text-2xl "> {item.point}</p>
           <h1 className="  py-2 text-3xl font-bold">{item.profile}</h1>
           <p className=" text-InkScribe "> {item.adress}</p>
         </div>
         ))}
         </>)
        }

export default Absolute