import ajax from 'apis/ajax';
import { A11yHidden } from 'components';
import { PortfolioContents, PortfolioProfile } from 'containers';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import scrollToTop from 'utils/scrollToTop';
import { useSelector } from 'react-redux';

const StyledPortfolioPage = styled.main``;

const PortfolioPage = ({ match, history }) => {
  const [portfolio, setPortfolio] = useState({
    user: null,
    skills: null,
    projects: null,
  });

  const {
    params: { user_id },
  } = match;

  const currentUser = useSelector(state => state.auth.currentUser);

  useEffect(() => {
    scrollToTop();

    const getPortfolioAsync = async () => {
      try {
        let {
          data: { responseData },
        } = await ajax.getPortfolio(user_id);

        if (!currentUser || responseData.user.user_id !== currentUser.user_id)
          responseData = {
            ...responseData,
            projects: responseData.projects.filter(({ is_private }) => !is_private),
          };

        setPortfolio(responseData);
      } catch (error) {
        history.push('/page-not-found');
      }
    };
    getPortfolioAsync();
  }, [user_id, currentUser, history]);

  return (
    <StyledPortfolioPage>
      <A11yHidden as="h2">
        {portfolio.user ? portfolio.user.name : null}의 포트폴리오 페이지
      </A11yHidden>
      <PortfolioProfile userInfo={portfolio.user} skills={portfolio.skills} />

      <PortfolioContents portfolio={portfolio} />
    </StyledPortfolioPage>
  );
};

PortfolioPage.defaultProps = {};

PortfolioPage.propTypes = {};

export default PortfolioPage;
