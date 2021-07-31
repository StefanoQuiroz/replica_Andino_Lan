import React from 'react';
import './App.css';
import Inicio from './views/Inicio';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Productos from './views/Productos';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={`/`}>
            <Inicio/>
          </Route>
          <Route path={`/productos`}>
            <Productos/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
