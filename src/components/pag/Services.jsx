import React from "react";

const Services = () => {
  const details = [
    {
      id: 1,
      title: "Webflow Develop",
      profession: "Small description",
      URL: "/l/Line.svg",
    },
    {
      id: 2,
      title: "UI/UX Design",
      profession: "Small description",
      URL: "/l/Line.svg",
    },
    {
      id: 3,
      title: "SEO Optimization",
      profession: "Small description",
      URL: "/l/Line.svg",
    },
  ];

  if (!details) {
    return <p>loading...</p>;
  }

  if (!details.length) {
    return <p>no value</p>;
  }

  return (
    <section className=" py-24 flex flex-col container">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Services</h1>
        <p className="text-p pt-5 text-2xl">
          Expertise services! Let’s check it out!
        </p>
      </div>
      <div className="flex max-md:flex-col gap-10  justify-center mt-10">
        {details.map((vector) => (
          <div key={vector.id} className="flex  group hover:bg-primary   duration-300  transition-all  items-start rounded-3xl p-5 gap-4 lg:w-60 border-2 pt-20"
          >
            <div className=" group-hover:text-white">
              <img
                className="h-9"
                src={vector.URL}
                alt={`${vector.title} icon`}
              />
              <h1 className="py-2 font-bold">{vector.title}</h1>
              <p className="text-sm ">{vector.profession}</p>
            </div>
            <button className="opacity-0 rounded-full mt-20 bg-scenery group-hover:opacity-100 flex justify-center items-center h-10 w-10 hover:animate-pulse">
              <img src="/l/flash.svg" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
