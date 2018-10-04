import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Tournament from "./pages/Tournament";
import Play from "./pages/Play";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/play" component={Play} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/Tournament" component={Tournament} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
