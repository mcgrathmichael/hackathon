import NavBar from "./NavBar/NavBar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";

import LandingPage from "./LandingPage";
import BeachCard from "./BeachCard";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/BeachCard" element={<BeachCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
