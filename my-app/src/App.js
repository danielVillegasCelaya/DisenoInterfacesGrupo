
import './App.css';
import React from "react";
import ApiOnline from "./componentes/ApiOnline";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import MenuNavBar from "./componentes/MenuNavBar";
import { MenuNav } from "./data/MenuNav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
      <Router>
       <MenuNavBar />
        {MenuNav.map((item) => {
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
      </body>
      
    </div>
  );
}

export default App;
