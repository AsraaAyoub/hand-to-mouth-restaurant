import React from "react";
import "../style/OrderList.css";

function OrderList ({orderList ,setOrderList}) {
  console.log(orderList)
  var total=0 ;
  if(orderList){
 for(var i=0;i<orderList.length;i++){
   total+=orderList[i].price.price;
 }
}

const removeItem = (name) => { 
  setOrderList(
     orderList.filter((element)=>{
     return element.name.name!=name
    })
   )
}


return (
  <div className="orderList"> 
    <h3> My Order :</h3>
    <ul>
      {orderList.map((order) => (
        <li key={order.name.name}>
          <h3>{order.name.name} {order.price.price}$ </h3>
          <button onClick={() => removeItem(order.name.name)}>Remove</button>
         
        </li>

      ))}
    </ul>
    <button onClick={() => setOrderList([])}>Remove All</button>
    <h3> total: {total}</h3>

  </div>

)
}
export default OrderList;

