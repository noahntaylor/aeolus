import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product";
import Story from "./Components/Story/Story";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Team from "./Components/Team/Team";
import News from "./Components/News/News";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Home></Home>
        <Product></Product>
        <Story></Story>
        <Team></Team>
        <News></News>
        <Contact></Contact>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
