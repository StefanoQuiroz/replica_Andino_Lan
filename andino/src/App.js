import React from 'react';
import './App.css';
import Inicio from './views/Inicio';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Productos from './views/Productos';
import Productos2 from './views/Productos2';
import Sucursales from './views/Sucursales';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={`/`}>
            <Inicio/>
          </Route>
          <Route path={`/productos/page/1`}>
            <Productos/>
          </Route>
          <Route path={`/productos/page/2`}>
            <Productos2/>
          </Route>
          <Route path={'/sucursales'}>
            <Sucursales/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

