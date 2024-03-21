import React, { useEffect, useState } from "react";
import "../styles/bookings.css";

// import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";

const CarItems = () => {
  const [carData,setCarData] = useState([])
  const hanlderCarApi = async  () =>{
    try {
      fetch("http://localhost:8000/api/v1/display-carlist")
      .then(response =>{
        console.log("my api res",response)
        if(!response.ok){
          throw new Error("some issue")
        }
        return response.json();
      }).then(data=>{
        console.log(data)
        setCarData(data)
      }).catch(error=>{
        console.log("my api",error)
      })

      console.log("my api call here==>");

    } catch (error) {
      console.log("my api error==>")
    }
  }
  useEffect(()=>{
    hanlderCarApi()
  },[])
  
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Items</h2>

        {/* <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>

          <div className="filter__widget-01">
            <select>
              <option value="toyota">Toyota</option>
              <option value="bmw">Bmw</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div> */}

        <div className="booking__car-list">
          {carData?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarItems;
