import React from "react";
import "../style/OrderList.css";
import { FaTimes } from "react-icons/fa";

function OrderList({ orderList, setOrderList }) {
  console.log(orderList);
  var total = 0;
  if (orderList) {
    for (var i = 0; i < orderList.length; i++) {
      total += orderList[i].price * orderList[i].quantity;
    }
  }

  function increase(order) {
    setOrderList((preState) =>
      preState.map((item) =>
        item.name === order.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decrease(order) {
    if (order.quantity === 1) {
      removeItem(order.name);
    }
    setOrderList((preState) =>
      preState.map((item) =>
        item.name === order.name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  const removeItem = (name) => {
    setOrderList(
      orderList.filter((element) => {
        return element.name !== name;
      })
    );
  };
  const removeAllHandler = () => {
    setOrderList([]);
    window.localStorage.removeItem("orders");
  };
  return (
    <div className="orderList">
      <h3> My Order :</h3>
      <ul>
        {orderList.map((order) => (
          <li key={order.name}>
            <h3 className="name">
              <FaTimes
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => removeItem(order.name)}
              />{" "}
              {order.name} {order.price}$
            </h3>
            <div>
              <img width="100px"  src={order.img} alt="" />
            </div>
            <div className="quan"> Quantity :{order.quantity}</div>

            <button className="inc"
              style={{ cursor: "pointer" }}
              onClick={() => increase(order)}
            >
              +
            </button >
            <button className="dec"
              style={{ cursor: "pointer" }}
              onClick={() => decrease(order)}
            >
              -
            </button>
            {/* <button onClick={() => removeItem(order.name)}>Remove</button> */}
          </li>
        ))}
      </ul>
      {orderList.length ? (
        <button className="removeAll" style={{ cursor: "pointer" }} onClick={removeAllHandler}>
          Remove All
        </button>
      ) : null}

      <h2> Total :{total}$</h2>
    </div>
  );
}
export default OrderList;
