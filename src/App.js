import Home from './pages/Home';
import Blog from './pages/Blog';
import New from './pages/New';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Blog">
            <Blog />
          </Route>

          <Route path="/New">
            <New />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
