import Index from './views/Index/index.tsx';
import Login from './views/Login/index.jsx';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
import './App.css';
import './assets/commoncss/index.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact >
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact component={Login} />
        <Route path="/index" component={Index} />
      </Router>
    </div>
  );
}

export default App;
