import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, removeItem }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}$</h4>
        </div>
        <p>
          {readMore ? info : info.substr(0, 200)}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "show more"}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeItem(id)}>
          not interested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
