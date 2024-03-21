import React from "react";

const CarItem = (props) => {
  const { trasmission, schedule, image, carName, admidName,city } = props.item;
  console.log("my image ", admidName)
  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3>{carName}</h3>
          {/* <span>
            <i class="ri-heart-line"></i>
          </span> */}
        </div>
        {/* <p>{category}</p> */}
      </div>

      <div className="car__img">
        <img src={"http://localhost:8000/carImage/" + image[0]} alt="not found" />
      </div>

      <div className="car__item-bottom">
        <div className="car__bottom-left">

          <p>
            <i class="ri-repeat-line"></i>
            {trasmission}
          </p>
          
        </div>
        

        <p className="car__rent">Rs.{schedule}</p>
      </div>
      <div className="car__bottom-left">
          <p>
            <i class="ri-user-line"></i> {admidName}
          </p>
          <p>{city}</p>
          <p>

          <button className="delete-btn"><i class="ri-delete-bin-5-fill"></i></button>
          </p>
        </div>

        <div className="">
        </div>
    </div>
  );
};

export default CarItem;
