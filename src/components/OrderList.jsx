import React from "react";

function OrderList ({orderList ,setOrderList}) {
  console.log(orderList)
return (
  <ul>
 {
 orderList.map((order) => {
     {console.log(order.name.name)}
    <li key={order.name.name}> 
    <h3>{order.name.name}</h3>
    </li>

  })
}
  </ul>

)
}
export default OrderList;

