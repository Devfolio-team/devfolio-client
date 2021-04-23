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
  SignIn,
} from 'pages';
import useDetectViewport from 'hooks/useDetectViewport';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledContainer = styled.div`
  min-height: 100vh;
`;

function App() {
  const viewport = useDetectViewport();

  const auth = useSelector(state => state.auth);
  // const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = () => {
      // 전역 상태에 유저의 정보는 있는데 쿠키에 인증토큰이 존재하지 않는다면 로그아웃을 시켜 전역상태를 비워준다. (쿠키만 없을때)
      if (auth.currentUser && !new RegExp(/auth_token/).test(document.cookie)) {
        // dispatch();
      }
      // 전역상태에 유저의 정보가 없고 auth_token 쿠키도 존재하지 않는다면 아무일도 일어나지 않음 (두 가지 다 없을때)
      if (!auth.currentUser && !new RegExp(/auth_token/).test(document.cookie)) return;
      // App컴포넌트에서는 쿠키는 있고 전역 상태에 유저의 정보만 있는 경우에도 아무일도 일어나지 않는다.
      // 이 로직은 실제로 로그인이 이루어지는곳에서만 따로 검사해주어 로그인 처리를 해준다.
    };
    checkUser();
    // 쿠키가 없다면 유저의 정보의 상태를 바꿔줄것이기 때문에 의존성 배열은 비워주어 최초 1회만 실행되어야 한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <HeaderBar viewport={viewport} />
      <StyledContainer>
        <Switch>
          <Route path="/" exact render={() => <HomePage viewport={viewport} />} />
          <Route path="/portfolio/:user_id" exact component={PortfolioPage} />
          <Route
            path="/edit/portfolio/:portfolio_id"
            exact
            render={() => <PortfolioEditPage viewport={viewport} />}
          />
          <Route
            path="/project/:project_id"
            exact
            render={() => <ProjectPage viewport={viewport} />}
          />
          <Route
            path="/edit/project/:project_id?"
            exact
            render={() => <ProjectEditPage viewport={viewport} />}
          />
          <Route path="/sign_in" exact component={SignIn} />
          <Redirect to="page-not-found" render={() => <PageNotFound viewport={viewport} />} />
        </Switch>
      </StyledContainer>
      <FooterBar />
    </Router>
  );
}

export default App;
