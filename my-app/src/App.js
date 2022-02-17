import logo from './logo.svg';
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
