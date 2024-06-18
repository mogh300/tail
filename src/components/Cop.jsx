import React from 'react';

const people = [{
    id: 0,
    title: 'Evo Design System',
    profession: 'mathematician',
  }, {
    id: 1,
    title: 'Evo Design System',
    profession: 'Car rentals in 86 pickup locations',
  }, {
    id: 2,
    title: 'Evo Design System',
    profession: 'Car rentals in 86 pickup locations',
  }, {
    id: 3,
    title: 'Evo Design System',
    profession: 'Car rentals in 86 pickup locations',  
  }, {
    id: 4,
    title: 'Evo Design System',
    profession: 'Car rentals in 86 pickup locations',
  }, {
    id: 5,
    title: 'Evo Design System',
    profession: 'Car rentals in 86 pickup locations',  
  },
];

export default function Cop() {
  return (
    <div>
           <div className='flex  items-center mt-16 justify-center gap-10 max-md:flex-col container   '>
           <div className='  grid grid-cols-3 gap-5'>
      {people.map((person) => (
        <a key={person.id} href="">
          <div className="flex flex-col container relative">
            <img className="rounded-2xl" src="/img/img.png" alt="" />
            <div className="absolute hidden rounded-full m-4  md:bg-InkScribe py-2 px-5">
              <h1 className="text-background text-sm font-DM">Product design</h1>
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-left">
                <h1 className="font-bold">{person.title}</h1>
                <p className="text-sm text-foreground max-md:hidden mt-1">{person.profession}</p>
              </div>
              <div>
                <img src="/img/small circle button.png" alt="" />
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
    </div>
    </div>
  );
}

