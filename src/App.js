import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SelectCategory from "./pages/SelectCategory";
import Home from "./pages/Home";
import Entertainment from "./pages/Entertainment";

function App() {
  console.log(process.env);
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/" element={<Register />} />
        <Route path="/select-category" element={<SelectCategory />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </Router>
  );
}

export default App;
