import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import ThermoplasticPage from "../ThermoplasticPage/ThermoplasticPage";
import Footer from "../Footer/Footer";
import ColdPlastic from "../ColdPlastic/ColdPlastic";
import AboutCompany from "../AboutCompany/AboutCompany";
import "./App.css";
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import Vacancies from "../Vacancies/Vacancies";
import Partners from "../Partners/Partners";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <NavigationMenu />
          <Routes>
            {/* редирект с корня на /about */}
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<AboutCompany />} />
            <Route path="/partners" element={<Partners />} />

            <Route path="/thermoplastic" element={<ThermoplasticPage />} />
            <Route path="/coldplastic" element={<ColdPlastic />} />
            <Route path="/vacancies" element={<Vacancies />} />
          </Routes>
        </Router>
      </div>
      <Footer /> <WhatsappButton />
    </>
  );
}

export default App;
