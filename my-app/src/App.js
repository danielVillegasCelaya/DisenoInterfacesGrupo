
import './App.css';
import React from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import MenuNavBar from "./componentes/MenuNavBar";
import { MenuNav } from "./data/MenuNav";

function App() {
  return (
    <Router>
        <header className="App-header">
          <MenuNavBar/>
        </header>
        {MenuNav.map((item) => {
          return (
            <Route
              key={item.id}
              path={item.path}
              exact
              component={item.component} />
          );
        })}
    </Router>
  );
}

export default App;
