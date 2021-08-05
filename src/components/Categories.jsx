import React, { useState } from "react";

function Categories({ items, onClick }) {
  const [ActiveItem, setActiveItem] = useState();

  const onSeletItem = (idx) => {
    setActiveItem(idx);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={ActiveItem === null ? "active" : ""}
          onClick={() => onSeletItem(null)}
        >
          Все
        </li>
        {items && items.map((item, idx) => {
          return (
            <li
              className={ActiveItem === idx ? "active" : ""}
              onClick={() => onSeletItem(idx)}
              key={idx}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
