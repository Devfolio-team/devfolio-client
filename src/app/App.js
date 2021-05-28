import { FooterBar, HeaderBar } from 'containers';
import { BrowserRouter as Router } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import {
  FavoriteProjectPage,
  HomePage,
  PageNotFound,
  PortfolioEditPage,
  PortfolioPage,
  ProjectEditPage,
  ProjectPage,
  SignIn,
  SearchPage,
} from 'pages';
import useDetectViewport from 'hooks/useDetectViewport';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { signOutMiddleware } from 'store/modules/auth/authMiddleware';

const FlexApp = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column nowrap;
`;

const EmptyContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`;

const App = () => {
  const viewport = useDetectViewport();

  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    // 전역 상태에 유저의 정보는 있는데 쿠키에 인증토큰이 존재하지 않는다면 로그아웃을 시켜 전역상태를 비워준다. (쿠키만 없을때)
    if (auth.currentUser && !new RegExp(/auth_token/).test(document.cookie)) {
      dispatch(signOutMiddleware());
    }
  }, [auth.currentUser, dispatch]);

  return (
    <Router>
      <FlexApp>
        <HeaderBar viewport={viewport} />
        <EmptyContainer>
          <Switch>
            <Route path="/" exact render={() => <HomePage viewport={viewport} />} />
            <Route path="/portfolio/:user_id" exact component={PortfolioPage} />
            <Route
              path="/edit/portfolio/:portfolio_id"
              exact
              render={() => <PortfolioEditPage viewport={viewport} />}
            />
            <Route path="/project/:project_id" exact component={ProjectPage} />
            <Route
              path="/edit/project/:project_id?"
              exact
              render={() => <ProjectEditPage viewport={viewport} />}
            />
            <Route
              path="/favorite_project/:current_user_id"
              exact
              component={FavoriteProjectPage}
            />
            <Route path="/search" exact component={SearchPage} />
            <Route path="/sign_in" exact component={SignIn} />
            <Route path="/page-not-found" component={PageNotFound} />
            <Redirect to="/page-not-found" />
          </Switch>
        </EmptyContainer>
        <FooterBar />
      </FlexApp>
    </Router>
  );
};

export default App;
