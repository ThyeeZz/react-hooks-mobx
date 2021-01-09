import Index from './views/Index/index.jsx';
import Login from './views/Login/index.jsx';
import Error from './views/Error';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import {
  stores,
  StoresContext
} from './store';
import {Provider} from 'mobx-react';
import './App.css';
import './assets/commoncss/index.scss'

function App() {
  return (
    <Provider {...stores}>
      <StoresContext.Provider value={stores}>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/" exact >
                <Redirect to="/login" />
              </Route>
              <Route path="/login" exact component={Login} />
              <Route path="/index" component={Index} />
              <Route component={Error} />
            </Switch>
          </Router>
        </div>
      </StoresContext.Provider>
    </Provider>
    
  );
}

export default App;
