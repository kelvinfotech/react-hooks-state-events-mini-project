import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const handleSelectCategory = (category) => {
    onSelectCategory(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button 
          key={index} 
          className={selectedCategory === category ? 'selected category' : 'category'}
          onClick={() => handleSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
