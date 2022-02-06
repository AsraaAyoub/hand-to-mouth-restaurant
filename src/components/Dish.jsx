import React from "react";
function Dish({
  name,
  description,
  category,
  price,
  img,
  orderList,
  setOrderList,
}) {
  const addItem = (itemName) => {
    var found = 0;
    // var found = orderList.find((element)=>
    // element.name.name = itemName
    //  )
    for (var i = 0; i < orderList.length; i++) {
      if (orderList[i].name.name == itemName) found = 1;
    }
    if (found == 0)
      setOrderList(
        orderList.concat({ name: { name }, price: { price }, quantity: 1 })
      );

    // add to local sotrage and redirect to home
  };
  return (
    <li key={name}>
      <h3>{name} </h3>
      <div> {category}</div>
      <div>{description}</div>
      <div>{price}$</div>
      {img ? <img width="200px" src={img} alt="" /> : null}
      <button onClick={() => addItem(name)}>Add to order</button>
    </li>
  );
}

export default Dish;
