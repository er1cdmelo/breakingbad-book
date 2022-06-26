import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import CharCard from "./card/CharCard";
import Episodes from "./pages/Episodes";
import EpInfo from "./card/EpInfo";
import Deaths from "./pages/Deaths";
import DeathInfo from "./card/DeathInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/characters/:id" element={<CharCard />} />
        <Route path="/episodes/:id" element={<EpInfo />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/deaths" element={<Deaths />} />
        <Route path="/deaths/:name" element={<DeathInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
