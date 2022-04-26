import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ScrollToTop from "./Pages/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop></ScrollToTop>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="About" element={<AboutPage></AboutPage>}></Route>
          <Route path="Contact" element={<ContactPage></ContactPage>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
