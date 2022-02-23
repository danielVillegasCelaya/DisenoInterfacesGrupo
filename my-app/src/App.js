
import './App.css';
import React from "react";
import ApiOnline from "./componentes/ApiOnline";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import MenuNavBar from "./componentes/MenuNavBar";
import { menuNav } from "./data/menuNav";

function App() {
  return (
    <div className="App">
      <header className="App-header"/>
      <Router>
       <MenuNavBar />
        {menuNav.map((item) => {
          return (
            <Route
              key={item.id}
              path={item.path}
              exact
              component={item.component}
            />
          );
        })}
        <ApiOnline />
      </Router>
    </div>
  );
}

export default App;
