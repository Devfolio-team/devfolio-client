import { Container, Image, Span, SVGIcon } from 'components';
import React from 'react';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';
import jiwonProfile from 'assets/김지원-프로필.jpg';

const StyledPortfolioProfile = styled.div`
  ${props => css`
    ${applyStyle(props)}
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    min-height: 100vh;
    background: #f19d85;
  `}
`;

const SimpleIntroduce = styled.em`
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  text-align: center;
  line-height: 3.5rem;
  color: #212121;
  margin: 65px 0 65px;
`;

const PortfolioProfile = () => {
  return (
    <StyledPortfolioProfile>
      <Container
        width={422}
        height={704}
        display="flex"
        flexFlow="column nowrap"
        justifyContent="flex-start"
        alignItems="center"
        padding="150px 0 0 0"
      >
        <Image
          src={jiwonProfile}
          alt=""
          borderRadius="50%"
          width={250}
          height={250}
          objectFit="cover"
        />
        <Span fontSize={6.4} fontWeight={700} color="#212121" margin="35px 0 20px">
          김지원
        </Span>

        <Span fontSize={3.4} fontWeight={700} color="#212121">
          (iamkjw77)
        </Span>
        <SimpleIntroduce>기본기를 중요시하고, 매일 성장하는 것이 목표입니다.</SimpleIntroduce>

        <Span fontSize={2.4} fontWeight={700} color="#212121">
          저는 React.js 할 줄 아는 개발자 입니다.
        </Span>
        <Container width={270} margin="65px 0 0" display="flex" justifyContent="space-between">
          <SVGIcon type="GithubBlack" width="40" height="40" />
          <SVGIcon type="Email" width="40" height="40" />
          <SVGIcon type="Blog" width="40" height="40" />
        </Container>
      </Container>
    </StyledPortfolioProfile>
  );
};

export default PortfolioProfile;
