import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PriceFilter from "./components/PriceFilter";
import DishesList from "./components/DishesList";
import CatFilter from "./components/CatFilter";

function App() {
  const [priceFilter, setPriceFilter] = React.useState([0.5, 9]);
  const [catFilter, setCatFilter] = React.useState("all");

  return (
    <div className="App">
      <h1> Hand to mouth resturant </h1>
      <PriceFilter
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      ></PriceFilter>
      <CatFilter catFilter={catFilter} setCatFilter={setCatFilter}></CatFilter>
      <DishesList catFilter={catFilter} priceFilter={priceFilter}>
        {" "}
      </DishesList>
    </div>
  );
}

export default App;
