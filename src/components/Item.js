import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleCartToggle = () => {
    setInCart(prevInCart => !prevInCart);
  };

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>
        {inCart ? "Remove Form Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
