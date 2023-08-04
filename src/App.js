import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SelectCategory from "./pages/SelectCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/select-category" element={<SelectCategory />} />
      </Routes>
    </Router>
  );
}

export default App;
