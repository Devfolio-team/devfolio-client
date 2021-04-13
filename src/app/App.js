import { HeaderBar } from 'containers';
import { BrowserRouter as Router } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';

function App() {
  return (
    <Router>
      <HeaderBar />
      <Switch>
        <Route path="/" exact />
        <Route path="/portfolio" exact />
        <Route path="/portfolio/edit" exact />
        <Route path="/procjet" exact />
        <Route path="/project/edit" exact />
        <Redirect to="page-not-found" />
      </Switch>
    </Router>
  );
}

export default App;
