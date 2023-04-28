import "./App.css";
import Home from "./Components/pages";
import { Route, Routes } from "react-router-dom";
import SingleCocktail from "./Components/singleCocktail/singlecocktail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </div>
  );
}

export default App;
