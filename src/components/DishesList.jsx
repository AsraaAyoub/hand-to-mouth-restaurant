import React from "react";
import dishes from "../database/data";
import Dish from "./Dish";
import "../style/DishList.css";
function DishesList({ priceFilter, catFilter, orderList, setOrderList }) {
  const dishItems = dishes;
  const [minPrice, maxPrice] = priceFilter;

  return (
    <ul class="box-container">
      {dishItems
        .filter((dish) => dish.category === catFilter || catFilter === "all")
        .filter((dish) => dish.price >= minPrice && dish.price <= maxPrice)
        .map((dish) => (
          <Dish
            key={dish.id}
            name={dish.name}
            category={dish.category}
            price={dish.price}
            description={dish.description}
            img={dish.image}
            setOrderList={setOrderList}
            orderList={orderList}
          ></Dish>
        ))}
    </ul>
  );
}

export default DishesList;
