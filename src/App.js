import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Board from "./components/Board";

function App() {
  const [colorTheme, setColorTheme] = useState("blue");

  const toggleColorTheme = () => {
    setColorTheme((prevState) => (prevState === "blue" ? "pink" : "blue"));
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id="App">
        <Header colorTheme={colorTheme} toggleColorTheme={toggleColorTheme}/>
        <main className={colorTheme}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/board" component={Board} />
          <Route path="/about" component={About} />
        </Switch>
        </main>
        <Footer />   
      </div>
    </Router>
  );
}

export default App;
