import React from "react";
import "./App.css";
import PriceFilter from "./components/PriceFilter";
import DishesList from "./components/DishesList";
import CatFilter from "./components/CatFilter";
import OrderList from "./components/OrderList";

import { useModal } from "react-hooks-use-modal";
import { useEffect } from "react";

function App() {
  const [priceFilter, setPriceFilter] = React.useState([0.5, 9]);
  const [catFilter, setCatFilter] = React.useState("all");
  const [orderList, setOrderList] = React.useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  useEffect(() => {
    localStorage.setItem("orders", [JSON.stringify(orderList)]);
  }, [orderList]);
  console.log(orderList);

  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });

  //use effect and get orderlist from a storage (once)

  return (
    <div className="App">
      <button
        style={{ cursor: "pointer" }}
        className="buttonStyle"
        onClick={open}
      >
        My Order {orderList.length}
      </button>

      <Modal className="orderList">
        <div>
          <OrderList orderList={orderList} setOrderList={setOrderList} />
          <button className="close" style={{ cursor: "pointer" }} onClick={close}>
            CLOSE
          </button>
        </div>
      </Modal>
      <h1 class="title">Hand to Mouth Restaurant</h1>

      <main>
        <section className="filters">
          <form>
            <PriceFilter
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
            ></PriceFilter>
            <br></br>
            <CatFilter
              catFilter={catFilter}
              setCatFilter={setCatFilter}
            ></CatFilter>
          </form>
        </section>

        <section className="dishes">
          <DishesList
            catFilter={catFilter}
            priceFilter={priceFilter}
            orderList={orderList}
            setOrderList={setOrderList}
          ></DishesList>
        </section>
      </main>
    </div>
  );
}

export default App;
