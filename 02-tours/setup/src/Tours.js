import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeItem }) => {
  return (
    <section>
      <div className='title'>
        <h4>Our tours</h4>
        <div className='underline'></div>
      </div>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeItem={removeItem}/>
      ))}
    </section>
  );
};

export default Tours;
