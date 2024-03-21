import React from "react";
import "../styles/Dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/MileCharts";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";

const carObj = {
  title: "Total Cars",
  totalNumber: 20,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Daily Trips",
  totalNumber: 50,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Clients",
  totalNumber: "11",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Sub Admin",
  totalNumber: 10,
  icon: "ri-user-line",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Day Wise Booking</h3>
            <MileChart />
          </div>

          {/* <div className="stats">
            <h3 className="stats__title">Car Statistics</h3>
            <CarStatsChart />
          </div> */}
        </div>

        {/* <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
