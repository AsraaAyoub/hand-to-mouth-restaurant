import React from 'react';
import dishes from "../database/data";
import Dish from './Dish';
import '../style/DishList.css'
function DishesList (){
    return (
        <ul>
      {dishes.map((dish) => (
       <Dish key={dish.id} name={dish.name} category={dish.category} price={dish.price} description={dish.description} img={dish.image} > </Dish>
       ))}
       </ul>
    )
}

export default DishesList;