import React, { useEffect, useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import AutoComplete from "../components/AutoComplete";
import toast from "react-hot-toast";

const Forms = () => {
  const [isToggled, setIsToggled] = useState(false);
  const param = parseInt(useParams().id)

  // console.log(param)
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const [cars, setCars] = useState([])
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [pick, setPick] = useState(null)
  const [drop, setDrop] = useState(null)

  const handlePick = (location) => {
    setPick(location)
  }

  const handleDrop = (location) => {
    setDrop(location)
  }


  const handleSelectVehicle = (id) => {
    let car = cars.filter(c=> c.id == id)
    setSelectedVehicle(car[0]);
    localStorage.setItem('car', JSON.stringify(car[0]))
    document.getElementById("my_modal_3").close()
  };

  useEffect(() => {
    fetch('/data/data.json')
    .then(res=> res.json())
    .then(data=> {
      setCars(data)
      const car = data.filter(c=> c.id == param)
      setSelectedVehicle(car[0])
    })
    .catch(err=> {
      console.log(err)
    })
  }, [])


 const bookSubmit = (e) => {
    e.preventDefault()

    if(!pick || !drop){
      toast.error('Please select pick up and drop off location!')
      return
    }
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      pick: pick,
      drop: drop,
      carName: selectedVehicle.name
    }

    console.log(data)

    toast.promise(
      fetch("https://car-rental-back-end.vercel.app/mail-to-user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json();
        })
        .then((d) => {
          if (d.err) throw new Error(d.err);

          
        }),
      {
        loading: "Sending mail...",
        success: <b>Sent.</b>,
        error: (error) => <b>{error.message}</b>,
      }
    );



    


 }



  return (
    <>
    {
    selectedVehicle ? 
    <div>
      <div class="flex justify-center items-center">
        <div class=" main-form w-[600px] shadow-md  bg-white">
          <div class="bg-white pb-5 pt-5 ">
            <div class="header-part bg-white mb-3 px-10 ">
              <Link to='/'>
                <span class="arrow material-symbols-outlined">arrow_back</span>
              </Link>
              <h1 className="rental">Rental</h1>
              <h3 className="trip">Request a Trip</h3>
            </div>

            <hr />

            <div class="car-brand flex justify-between py-6 px-10 ">
              <div class="item-detail ">
                <div>
                  <img
                    className="car"
                    src={selectedVehicle.img}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="sedan">{selectedVehicle.name}</h2>
                  <p className="car-seat">{selectedVehicle.seat}</p>
                </div>
              </div>
              
              <div>
                <a
                  href="#"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  <span class="pen material-symbols-outlined">edit</span>
                </a>
                {/*modal ------*/}
                <dialog id="my_modal_3" className="modal main-modal">
                  <div className="modal-box bg-white text-black">
                    <form method="dialog">
                      <h3 className="select-vechiel">Select Vehicl Type</h3>
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <div className="modal-body p-2 ">
                      {/* vehicl-number-------- */}
                      {
                        cars.map(car=> <div key={car.id} className="form-control">
                        <label className="label cursor-pointer">
                          <div class="item-detail ">
                            <div>
                              <img
                                className="car"
                                src={car.img}
                                alt=""
                              />
                            </div>
                            <div>
                              <h2 className="sedan">{car.name}</h2>
                              <p className="car-seat">{car.seat}</p>
                            </div>
                          </div>

                          <input
                            type="radio"
                            name="radio-10"
                            className="radio checked:bg-red-500 border-gray-400"
                            onClick={()=> handleSelectVehicle(car.id)}
                          />
                        </label>
                      </div>)
                      }
                      
                    </div>
                  </div>
                </dialog>
              </div>
            </div>

            <div className="devider"></div>

            <div class="destination flex gap-4 items-center px-10  py-3">
              <div class="pick-drop flex flex-col gap-3 items-center">
                <span class="pickup-logo material-symbols-outlined">
                  radio_button_unchecked
                </span>
                <div className="vertile"></div>
                {/*  */}
                <span
                  id="hiddenDiv3"
                  className="hidden pickup-logo2 material-symbols-outlined"
                >
                  radio_button_unchecked
                </span>
                <div id="hiddenDiv4" className="hidden vertile"></div>
                {/*  */}

                <span class="drop-logo material-symbols-outlined">stop</span>
              </div>
              <div className="flex flex-col gap-5 me-20">
                <div>
                  <h2 className="pickup">Pickup Point</h2>
                  {/* <input
                    placeholder="Search pickup location"
                    className="search focus:outline-none"
                    type="search"
                  /> */}
                  <AutoComplete id="pick-up" handleLocation={handlePick}/>
                </div>

               

                {/*  */}
                {/*    <div id="hiddenDiv5" className="hidden">
                  <h2 className="pickup ">Via Point</h2>
                  <input
                    placeholder="Search via location "
                    className="search focus:outline-none"
                    type="search"
                  />
                </div>

                <div
                  id="hiddenDiv6"
                  className="hidden relative"
                  data-v-a0ca3c8a
                >
                  <hr class="border-dashed mt-[4px] w-[470px]" />
                </div> */}
                {/*  */}

                <div>
                  <h2 className="pickup">Drop Off Point</h2>
                  <AutoComplete id="drop-off" handleLocation={handleDrop}/>
                  {/* <input
                    placeholder="Search drop off location"
                    className="search focus:outline-none"
                    type="search"
                  /> */}
                </div>
              </div>
            </div>

            <div className="devider"></div>

            <div class="date-time flex justify-between items-center px-10  py-6">
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class="schedule-logo material-symbols-outlined">
                        calendar_month
                      </span>
                    </a>
                  </div>
                  <div>
                    <h1 className="dt">Select Date</h1>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Type here"
                  className="dtt input  w-full max-w-xs "
                />
              </div>
            </div>

            <hr />

            <div class="date-time flex justify-between items-center px-10  py-6">
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class="schedule-logo material-symbols-outlined">
                        schedule
                      </span>
                    </a>
                  </div>
                  <div>
                    <h1 className="dt">Select Time</h1>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="time"
                  placeholder="3.44 am"
                  className="dtt dtt2 input  bg-white  w-full max-w-xs "
                />
              </div>
            </div>

            <hr />

            <div class="date-time flex justify-between items-center px-10  py-6">
              <div class="item-detail ">
                <div className="flex gap-2">
                  <div>
                    <a href="#">
                      <span class=" schedule-logo2 material-symbols-outlined">
                        travel
                      </span>
                    </a>
                  </div>
                  <div>
                    <h1 className="dt">Round Trip </h1>
                  </div>
                </div>
              </div>
              <div>
                <button onClick={handleToggle}>
                  {isToggled ? (
                    <FaToggleOn size={30} />
                  ) : (
                    <FaToggleOff size={30} />
                  )}
                </button>
              </div>
            </div>

            <hr />

            <div>
              {isToggled && (
                <div>
                  <div
                    id="hiddenDiv1"
                    class="flex  date-time justify-between items-center px-10  py-6"
                  >
                    <div class="item-detail ">
                      <div className="flex gap-2">
                        <div>
                          <a href="#">
                            <span class="schedule-logo material-symbols-outlined">
                              calendar_month
                            </span>
                          </a>
                        </div>
                        <div>
                          <h1 className="dt"> Select Round Trip Date</h1>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        type="date"
                        placeholder="Type here"
                        className="dtt input  w-full max-w-xs "
                      />
                    </div>
                  </div>

                  <hr />
                  <div
                    id="hiddenDiv2"
                    class="flex  date-time justify-between items-center px-10  py-6"
                  >
                    <div class="item-detail ">
                      <div className="flex gap-2">
                        <div>
                          <a href="#">
                            <span class="schedule-logo material-symbols-outlined">
                              schedule
                            </span>
                          </a>
                        </div>
                        <div>
                          <h1 className="dt">Select Time</h1>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        type="time"
                        placeholder="3.44 am"
                        className="dtt dtt2 input  bg-white  w-full max-w-xs "
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <hr />

          <div class="flex  justify-center py-6">
            <div class="item-detail ">
              <form onSubmit={bookSubmit}>
              <div className="form-control">
                            <label className="label">
                              <span className="label-text">Name</span>
                            </label>
                            <input
                              type="name"
                              placeholder="Your Name"
                              className="input input-bordered"
                              name="name"
                              required
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Email</span>
                            </label>
                            <input
                              type="email"
                              placeholder="Yout email"
                              className="input input-bordered"
                              required
                              name="email"
                            />
                            
                          </div>
                        
<button type="submit"
              className="form-btn btn btn-secondary px-20 mt-10"
            >
              Book
            </button>


              </form>
            </div>
          </div>

          <div className="flex justify-center">
            {/* <button
              className="form-btn btn btn-secondary px-20"
            >
              Next
            </button> */}

            {/*modal ------*/}
            <dialog id="my_modal_4" className="modal main-modal">
              <div className="modal-box bg-white text-black">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="modal-body p-2 ">
                    
                      
                      <div className="card ">
                        <form className="card-body">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Email</span>
                            </label>
                            <input
                              type="email"
                              placeholder="email"
                              className="input input-bordered"
                              required
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Password</span>
                            </label>
                            <input
                              type="password"
                              placeholder="password"
                              className="input input-bordered"
                              required
                            />
                            <label className="label">
                              <a
                                href="#"
                                className="label-text-alt link link-hover"
                              >
                                Forgot password?
                              </a>
                            </label>
                          </div>
                          <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                          </div>
                        </form>
                      </div>
                    
                  



                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div> : <div>Loading...</div>
    }
    </>
  );
};

export default Forms;
