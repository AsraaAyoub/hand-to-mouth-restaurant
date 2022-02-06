import React from "react";
import "../style/OrderList.css";

function OrderList({ orderList, setOrderList }) {
  console.log(orderList);
  var total = 0;
  if (orderList) {
    for (var i = 0; i < orderList.length; i++) {
      total += orderList[i].price.price;
    }
  }

  function increase(order) {
    setOrderList((preState) =>
    preState.map((item) => (item.name.name === order.name.name ? { ...item, quantity: item.quantity +1 } : item)),
  );
  }

  function decrease(order) {
    if(order.quantity===1){
      removeItem(order.name.name)
    }
    setOrderList((preState) =>
    preState.map((item) => (item.name.name === order.name.name ? { ...item, quantity: item.quantity -1 } : item)),
  ); 
  }

  const removeItem = (name) => {
    setOrderList(
      orderList.filter((element) => {
        return element.name.name !== name;
      })
    );
  };
  const removeAllHandler = () => {
    setOrderList([]);
  };
  return (
    <div className="orderList">
      <h3> My Order :</h3>
      <ul>
        {orderList.map((order) => (
          <li key={order.name.name}>
            <h3>
              {order.name.name} {order.price.price}$
            </h3>
            <div> {order.quantity}</div>
       
            <button onClick={() => increase(order)}>+</button>
            <button onClick={() => decrease(order)}>-</button>
            <button onClick={() => removeItem(order.name.name)}>Remove</button>
          </li>
        ))}
      </ul>
      {orderList.length?<button onClick={removeAllHandler}>Remove All</button>:null}
      
      <h3> total: {total}</h3>
    </div>
  );
}
export default OrderList;