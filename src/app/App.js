import { FooterBar, HeaderBar } from 'containers';
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
import useDetectViewport from 'hooks/useDetectViewport';

function App() {
  const viewport = useDetectViewport();

  return (
    <Router>
      <HeaderBar viewport={viewport} />
      <Switch>
        <Route path="/" exact render={() => <HomePage viewport={viewport} />} />
        <Route
          path="/portfolio/:portfoilo_id"
          render={() => <PortfolioPage viewport={viewport} />}
        />
        <Route
          path="/portfolio_edit/:portfolio_id"
          render={() => <PortfolioEditPage viewport={viewport} />}
        />
        <Route path="/project/:project_id" render={() => <ProjectPage viewport={viewport} />} />
        <Route
          path="/project_edit/:project_id"
          render={() => <ProjectEditPage viewport={viewport} />}
        />
        <Redirect to="page-not-found" render={() => <PageNotFound viewport={viewport} />} />
      </Switch>
      <FooterBar />
    </Router>
  );
}

export default App;
