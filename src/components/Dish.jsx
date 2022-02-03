import React from 'react';
function Dish({name,description,category,price,img}) {
    return(
     <li>
        <h3>{name} </h3>
        <div> {category}</div>
        <div>{description}</div>
        <div>{price}$</div>
        
        {img? <img  width="200px" src={img} alt="" /> : null}
    </li>
    )
}

export default Dish;