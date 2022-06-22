import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CharCard from "./card/CharCard";
import Episodes from "./pages/Episodes";
import EpInfo from "./card/EpInfo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/characters/:id" element={<CharCard />} />
        <Route path="/episodes/:id" element={<EpInfo />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </Router>
  );
}

export default App;
