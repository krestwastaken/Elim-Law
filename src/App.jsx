import { Routes, Route } from "react-router-dom";

import { AboutUs, Contact, Home, PracticeAreas, Team } from "./Pages";
import { Footer, Header, ScrollToTop } from "./Components";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};
export default App;
