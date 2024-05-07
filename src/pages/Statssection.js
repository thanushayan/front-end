import React from 'react';

const Statssection = () => {
  const statsData = [
    { number: 890, label: 'Delivered Packages' },
    { number: 137, label: 'Countries Covered' },
    { number: 740, label: 'Tons of Goods' },
    { number: 600, label: 'Satisfied Clients' },
  ];

  return (
    <div className="mt-10 mb-10">
      <div className="flex text-right">
      <h1 className=" text-3xl  ">Stats Section</h1>

      </div>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {statsData.map((stat) => (
          <div key={stat.number} className="relative">
            <div className="text-center shadow text-white   text-8xl">
              {stat.number}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center space-y-2 px-4 py-3 bg-white rounded-b-md">
              <h1 className="text-3xl flex-row font-bold text-bg-blue-500 text-right">{stat.number}</h1>
              <p className="text-lg    font-semibold text-bg-blue-500 text-left">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statssection;
