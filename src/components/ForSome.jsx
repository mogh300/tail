import React from 'react'
const ForSome = () => {
    const Proses = [
        {
            id:0,
            title:'Business Planning',
            Print:'We realize ideas from simple to complex, everything becomes easy touse',
            URL:'./img/icon-0.png'
        },
        {
            id:1,
            title:'Business Planning',
            Print:'We realize ideas from simple to complex, everything becomes easy touse',
            URL:'./img/icon-1.png'
        },
        {
            id:2,
            title:'Business Planning',
            Print:'We realize ideas from simple to complex, everything becomes easy touse',
            URL:'./img/icon-2.png'
        },
    ]
  return (
  <>
        {Proses.map((item)=> (
       <div className='flex flex-col items-center' key={item.id}>
       <img src={item.URL}/>
       <h1 className="font-bold">{item.title}</h1>
       <p className=" text-InkScribe text-sm">{item.Print}</p>
       </div>
       ))}
      </>
  )
}
export default ForSome