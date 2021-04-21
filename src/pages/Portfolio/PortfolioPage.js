import { A11yHidden, Container } from 'components';
import { PortfolioProfile } from 'containers';
import React from 'react';
import styled from 'styled-components';

const StyledPortfolioPage = styled.main``;

const PortfolioPage = () => {
  return (
    <StyledPortfolioPage>
      {/* TODO: 회원의 정보를 받으면 그 유저의 이름으로 h2를 설정하여 주기 */}
      <A11yHidden as="h2">{'유저의'} 포트폴리오 페이지</A11yHidden>
      <PortfolioProfile />
      <Container
        position="relative"
        zIndex="100"
        background="#f8f9fa"
        margin="100vh 0 0 0"
        width="100%"
        height="1200px"
      ></Container>
    </StyledPortfolioPage>
  );
};

PortfolioPage.defaultProps = {};

PortfolioPage.propTypes = {};

export default PortfolioPage;
