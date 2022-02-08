import React from "react";
import "../style/OrderList.css";
import { FaTimes } from "react-icons/fa";

function OrderList({ orderList, setOrderList }) {
  console.log(orderList);
  var total = 0;
  if (orderList) {
    for (var i = 0; i < orderList.length; i++) {
      total += orderList[i].price.price * orderList[i].quantity;
    }
  }

  function increase(order) {
    setOrderList((preState) =>
      preState.map((item) =>
        item.name.name === order.name.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decrease(order) {
    if (order.quantity === 1) {
      removeItem(order.name.name);
    }
    setOrderList((preState) =>
      preState.map((item) =>
        item.name.name === order.name.name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
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
    window.localStorage.removeItem("orders");
  };
  return (
    <div className="orderList">
      <h3> My Order :</h3>
      <ul>
        {orderList.map((order) => (
          <li key={order.name.name}>
            <h3>
              <FaTimes
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => removeItem(order.name.name)}
              />{" "}
              {order.name.name} {order.price.price}$
            </h3>
            <div>
              <img width="50px" height="60px" src={order.img.img} alt="" />
            </div>
            <div> {order.quantity}</div>

            <button
              style={{ cursor: "pointer" }}
              onClick={() => increase(order)}
            >
              +
            </button>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => decrease(order)}
            >
              -
            </button>
            {/* <button onClick={() => removeItem(order.name.name)}>Remove</button> */}
          </li>
        ))}
      </ul>
      {orderList.length ? (
        <button style={{ cursor: "pointer" }} onClick={removeAllHandler}>
          Remove All
        </button>
      ) : null}

      <h3> total: {total}</h3>
    </div>
  );
}
export default OrderList;
