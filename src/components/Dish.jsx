import React from 'react';
function Dish({name,description,category,price,img,orderList,setOrderList}) {
    const addItem = () => { 
        setOrderList(orderList.concat({'name':{name} , 'price':{price}}));
        // add to local sotrage and redirect to home
    }
    return(
     <li key={name}>
        <h3>{name} </h3>
        <div> {category}</div>
        <div>{description}</div>
        <div>{price}$</div>
        {img? <img  width="200px" src={img} alt="" /> : null}
        <button onClick={addItem}>Add to order</button>
        
    </li>
    )
}

export default Dish;