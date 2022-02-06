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

  function increase(name) {
    //   setOrderList((order)=>{
    //     var found = orderList.find((element)=>
    //    element.name.name == name
    //     )
    //    found.quantity=found.quantity+1;
    //   }
  }

  function decrease(name) {}

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
              {order.name.name} {order.price.price}${" "}
            </h3>
            <button onClick={() => increase(order.name.name)}>+</button>
            <button onClick={() => decrease(order.name.name)}>-</button>
            <button onClick={() => removeItem(order.name.name)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={removeAllHandler}>Remove All</button>
      <h3> total: {total}</h3>
    </div>
  );
}
export default OrderList;