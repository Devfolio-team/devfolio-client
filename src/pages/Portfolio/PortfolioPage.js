import ajax from 'apis/ajax';
import { A11yHidden, HeaderBarBackground } from 'components';
import { HeaderBar, PortfolioContents, PortfolioProfile } from 'containers';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import scrollToTop from 'utils/scrollToTop';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import useDetectViewport from 'hooks/useDetectViewport';

const StyledPortfolioPage = styled.main``;

const PortfolioPage = ({ match, location }) => {
  const viewport = useDetectViewport();

  const [portfolio, setPortfolio] = useState({
    user: null,
    skills: null,
    projects: null,
  });

  const {
    params: { user_id },
  } = match;

  const authState = useSelector(state => state.auth);

  const history = useHistory();

  useEffect(() => {
    scrollToTop();

    const getPortfolioAsync = async () => {
      try {
        const response = await ajax.getPortfolio(user_id);
        if (response.status === 200) {
          setPortfolio(response.data.responseData);
        }
      } catch (error) {
        history.push('/page-not-found');
      }
    };
    getPortfolioAsync();
  }, [user_id, authState.currentUser, history]);

  console.log(portfolio.user);

  return (
    <>
      {portfolio.user ? (
        <HeaderBar
          viewport={viewport}
          location={location}
          portfolioNickName={portfolio.user.nickname}
          userId={portfolio.user.user_id}
          match={match}
        />
      ) : (
        <HeaderBarBackground />
      )}

      <StyledPortfolioPage>
        <A11yHidden as="h2">
          {portfolio.user ? portfolio.user.name : null}의 포트폴리오 페이지
        </A11yHidden>
        <PortfolioProfile userInfo={portfolio.user} skills={portfolio.skills} />

        <PortfolioContents portfolio={portfolio} />
      </StyledPortfolioPage>
    </>
  );
};

PortfolioPage.defaultProps = {};

PortfolioPage.propTypes = {};

export default PortfolioPage;
