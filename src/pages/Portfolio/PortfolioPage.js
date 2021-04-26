import ajax from 'apis/ajax';
import { A11yHidden } from 'components';
import { PortfolioContents, PortfolioProfile } from 'containers';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import scrollToTop from 'utils/scrollToTop';

const StyledPortfolioPage = styled.main``;

const PortfolioPage = ({ match }) => {
  const [portfolio, setPortfolio] = useState({
    user: null,
    skills: null,
    projects: null,
  });

  const {
    params: { user_id },
  } = match;

  useEffect(() => {
    scrollToTop();

    const getPortfolioAsync = async () => {
      try {
        const response = await ajax.getPortfolio(user_id);
        if (response.status === 200) {
          setPortfolio(response.data.responseData);
        }
      } catch (error) {
        throw new Error(error);
      }
    };
    getPortfolioAsync();
  }, [user_id]);

  return (
    <StyledPortfolioPage>
      <A11yHidden as="h2">
        {portfolio.user ? portfolio.user.name : null}의 포트폴리오 페이지
      </A11yHidden>
      <PortfolioProfile userInfo={portfolio.user} skills={portfolio.skills} />

      <PortfolioContents skills={portfolio.skills} projects={portfolio.projects} />
    </StyledPortfolioPage>
  );
};

PortfolioPage.defaultProps = {};

PortfolioPage.propTypes = {};

export default PortfolioPage;
