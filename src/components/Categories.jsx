import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Index from './PizzaBlock'


const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {





  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items && items.map((item, index) => {
          return (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
})

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func
}
Categories.defaultProps = {
  activeCategory: null,
  items: []
}
export default Categories;
