import Home from './pages/Home';
import Blog from './pages/Blog';
import New from './pages/New';
import BlogDetails from './pages/BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/new">
            <New />
          </Route>

          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
