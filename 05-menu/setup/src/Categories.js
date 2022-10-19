import React from "react";

const Categories = ({ filterItems, allCategories }) => {
  return (
    <div className='btn-container'>
      {allCategories.map((category) => (
        <button className='filter-btn' onClick={() => filterItems(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
