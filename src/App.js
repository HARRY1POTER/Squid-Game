import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import Games from "./components/Games";
import BehindTheScenes from "./components/BehindTheScenes";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Join from "./components/Join";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import RedLightGreenLight from "./games/RLGL";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      {" "}
      <div>
        <Navbar />
        <Hero />
        <Characters />
        <Games />
        <BehindTheScenes />
        <Gallery />
        <Testimonials />
        <Join />
        <Footer />
        <BackToTop />
      </div>
      {/* Define Routes */}
      <Routes>
        <Route
          path="/game/red-light-green-light"
          element={<RedLightGreenLight />}
        />{" "}
      </Routes>
    </Router>
  );
}

export default App;
