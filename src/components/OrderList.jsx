import React from "react";
import "../style/OrderList.css";

function OrderList ({orderList ,setOrderList}) {
  console.log(orderList)
return (
  <div className="orderList">
    <h3> My Order :</h3>
    <ul >
      {orderList.map((order) => (
        <li key={order.name.name}>
          <h3>{order.name.name} {order.price.price}$</h3>
         
        </li>
      ))}
    </ul>

  </div>

)
}
export default OrderList;

