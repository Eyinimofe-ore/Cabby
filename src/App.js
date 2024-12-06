import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing";
import LoginSignup from "./Components/LoginSignup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="Login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
