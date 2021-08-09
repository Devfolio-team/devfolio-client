import { FooterBar, HeaderBar } from 'containers';
import { Redirect, Route, Switch, useLocation } from 'react-router';

import useDetectViewport from 'hooks/useDetectViewport';
import { lazy, Suspense, useEffect } from 'react';
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

  const { pathname } = useLocation();

  const isInfinityScrollPage = /^\/favorite_project\//.test(pathname) || pathname === '/';

  const Home = lazy(() => import('pages/Home/HomePage'));
  const Portfolio = lazy(() => import('pages/Portfolio/PortfolioPage'));
  const PortfolioEdit = lazy(() => import('pages/PortfolioEdit/PortfolioEditPage'));
  const Project = lazy(() => import('pages/Project/ProjectPage'));
  const ProjectEdit = lazy(() => import('pages/ProjectEdit/ProjectEditPage'));
  const FavoriteProject = lazy(() => import('pages/FavoriteProject/FavoriteProjectPage'));
  const Search = lazy(() => import('pages/Search/SearchPage'));
  const SignIn = lazy(() => import('pages/SignIn/SignIn'));
  const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

  useEffect(() => {
    // 전역 상태에 유저의 정보는 있는데 쿠키에 인증토큰이 존재하지 않는다면 로그아웃을 시켜 전역상태를 비워준다. (쿠키만 없을때)
    if (auth.currentUser && !new RegExp(/auth_token/).test(document.cookie)) {
      dispatch(signOutMiddleware());
    }
  }, [auth.currentUser, dispatch]);

  return (
    <FlexApp>
      <HeaderBar viewport={viewport} />
      <EmptyContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio/:user_id" exact component={Portfolio} />
            <Route path="/edit/portfolio/:portfolio_id" exact component={PortfolioEdit} />
            <Route path="/project/:project_id" exact component={Project} />
            <Route path="/edit/project/:project_id?" exact component={ProjectEdit} />
            <Route path="/favorite_project/:current_user_id" exact component={FavoriteProject} />
            <Route path="/search" exact component={Search} />
            <Route path="/sign_in" exact component={SignIn} />
            <Route path="/page-not-found" component={PageNotFound} />
            <Redirect to="/page-not-found" />
          </Switch>
        </Suspense>
      </EmptyContainer>
      {!isInfinityScrollPage && <FooterBar />}
    </FlexApp>
  );
};

export default App;
