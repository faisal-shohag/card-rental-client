import { useEffect } from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";

const CarSelect = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [cars, setCars] = useState([])


  const handleSelectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  useEffect(() => {
    fetch('/data/data.json')
    .then(res=> res.json())
    .then(data=> {
      setCars(data)
    })
    .catch(err=> {
      console.log(err)
    })
  }, [])

  

  return (
    <>
    {
    cars.length != 0 ?
    <div className="flex mt-6 lg:w-1/2 lg:justify-end items-end lg:mt-4 lg:h-[550px] lg:-mb-16 mr-14 car-selects">
    <div className="w-full max-w-md bg-white border-2 rounded-lg dark:bg-white px-2 pt-6">
      <h1 className="font-semibold mb-4 ml-5 text-lg">
        Which vehicle do you need?
      </h1>
      <div className="grid grid-cols-3 gap-4 mb-6 px-4">
        {
          cars.map(item=>  
          <button
          key={item.id}
            className={`w-[125px] h-[165px] pt-4 rounded-lg px-2 transition duration-500 ease-in-out text-center hover:bg-[#29D8DB] hover:text-white car-selects-btn ${
              selectedVehicle === item.id
                ? "bg-[#29D8DB] text-white"
                : "bg-[#F7F7F7]"
            }`}
            onClick={() => handleSelectVehicle(item.id)}
          >
            <img
              src={item.img}
              alt=""
              className="w-[60px] h-[60px] mx-auto"
            />
            <h5 className="font-semibold">{item.name}</h5>
            <p className="text-xs car-seats">{item.seat}</p>
          </button>)
        }
      </div>
      
      {
        selectedVehicle ?  <Link class="nav-link" to={`forms/${selectedVehicle}`}>
        <button className="bg-[#29D8DB] text-white rounded-full ml-9 my-4 py-3 mx-auto w-4/5 font-semibold">
          Request Trip
        </button>
      </Link> : <button disabled className="bg-[#6edbdd] cursor-not-allowed text-white rounded-full ml-9 my-4 py-3 mx-auto w-4/5 font-semibold">
          Request Trip
        </button>
      }
     

    </div>
  </div> : <div>Loading...</div>
  
}
</>
  )
};

export default CarSelect;
