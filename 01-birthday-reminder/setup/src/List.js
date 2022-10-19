import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map(({ id, name, image, age }) => (
        <div className='person' key={id}>
          <img src={image} alt='name' />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
