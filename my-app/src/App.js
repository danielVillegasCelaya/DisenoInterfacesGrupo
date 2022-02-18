import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MenuNavBar from './componentes/MenuNavBar';
import { MenuNav } from './data/MenuNav';

function App() {
  return (
    <Router>
        <header className="App-header">
          <MenuNavBar/>
        </header>
        <body className="App-body">
        {MenuNav.map((item) => {
          return (
            <Route
              key={item.id}
              path={item.path}
              exact
              component={item.component} />
          );
        })}
        </body>
    </Router>
  );
}

export default App;
