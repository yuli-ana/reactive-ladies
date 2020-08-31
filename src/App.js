import React, { useState} from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/index.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Kanban from "./components/Kanban";
import Info from "./components/Info";


function App() {
  const [colorTheme, setColorTheme] = useState("blue");

  const toggleColorTheme = () => {
    setColorTheme((prevState) => (prevState === "blue" ? "pink" : "blue"));
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id="App">
        <Header colorTheme={colorTheme} toggleColorTheme={toggleColorTheme}/>
        <main className={`main-container ${colorTheme}`}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/info" component={Info} />
            <Route path="/kanban" component={Kanban} />
          </Switch>
        </main>
        <Footer />   
      </div>
    </Router>
  );
}

export default App;
