import Home from "./components/Home/Home";
import About from "./components/About/About";
import Games from "./components/Games/Games";
import Contact from "./components/Contact/Contact";
import Privacy from "./components/Privacy/Privacy";
import Cookies from "./components/Cookies/Cookies";
import Terms from "./components/Terms/Terms";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import PaypalCheckout from "./components/PaypalCheckout/PayPalCheckout";

// import Footer from './components/Footer/Footer'

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="games" element={<Games />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="paypalCheckout" element={<PaypalCheckout />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </ScrollToTop>
  );
}
// react-router v6 Switch changed to Routes
export default App;
