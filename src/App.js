import { Header } from "./components";
import { Route } from "react-router-dom";
import { Cart, Home } from "./Pages";
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data}) =>{
      setPizzas(data.pizzas);
    })
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas} />} />
        <Route path="/Cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
