import { HeaderBar } from 'containers';
import { BrowserRouter as Router } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import {
  HomePage,
  PageNotFound,
  PortfolioEditPage,
  PortfolioPage,
  ProjectEditPage,
  ProjectPage,
} from 'pages';

function App() {
  return (
    <Router>
      <HeaderBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/portfolio/:portfoilo_id" component={PortfolioPage} />
        <Route path="/portfolio_edit/:portfolio_id" component={PortfolioEditPage} />
        <Route path="/project/:project_id" component={ProjectPage} />
        <Route path="/project_edit/:project_id" component={ProjectEditPage} />
        <Redirect to="page-not-found" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
