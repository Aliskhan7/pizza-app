import { Header } from "./components";
import { Route } from "react-router-dom";
import { Cart, Home } from "./Pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/Cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
