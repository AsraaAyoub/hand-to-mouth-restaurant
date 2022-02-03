import logo from './logo.svg';
import './App.css';
import Filter from './components/Filter'
import DishesList from './components/DishesList';


function App() {
  return (
    <div className="App">
     <h1> Hand to mouth resturant </h1>
     <Filter> </Filter>
     <DishesList> </DishesList>
    </div>
  );
}

export default App;
