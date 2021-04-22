import { A11yHidden, Container } from 'components';
import { PortfolioContents, PortfolioProfile } from 'containers';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import scrollToTop from 'utils/scrollToTop';

const StyledPortfolioPage = styled.main``;

const PortfolioPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <StyledPortfolioPage>
      {/* TODO: 회원의 정보를 받으면 그 유저의 이름으로 h2를 설정하여 주기 */}
      <A11yHidden as="h2">{'유저의'} 포트폴리오 페이지</A11yHidden>
      <PortfolioProfile />

      <PortfolioContents />
    </StyledPortfolioPage>
  );
};

PortfolioPage.defaultProps = {};

PortfolioPage.propTypes = {};

export default PortfolioPage;
