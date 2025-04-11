import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";

import Home from "./pages/Home";
import CareersPage from "./pages/Careers";

const App = () => {
  return (
    <Router>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>

        <Footer />
      </div>

      <ButtonGradient />
    </Router>
  );
};

export default App;
