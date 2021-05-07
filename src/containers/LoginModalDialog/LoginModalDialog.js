import { Button, Container, Heading, Span, SVGIcon } from 'components';
import { ModalDialog } from 'containers';
import React from 'react';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';

const DivisionLine = styled.div`
  ${({ $height, $marginBottom }) => css`
    border-bottom: 1px solid #454b58;
    width: 100%;
    height: ${$height};
    margin-bottom: ${$marginBottom};
  `}
`;

const DivisionDiv = styled.div`
  ${({ $width, $fontSize }) => css`
    color: #bdbdbd;
    background-color: #2c3035;
    width: ${$width};
    height: 23px;
    line-height: 23px;
    font-size: ${$fontSize};
    text-align: center;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
  `};
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SVGIconName = styled.span`
  font-size: 1.6rem;
  line-height: 1.6rem;
  margin-left: 16px;
`;

const LinkToWebSite = styled.a`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const LoginModalDialog2 = ({ viewport, isModalOpen, setIsModalOpen, beforeRef }) => {
  const { isDesktop, isMobile, type } = viewport;

  return (
    <ModalDialog
      viewport={viewport}
      beforeRef={beforeRef}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      width={`${isDesktop ? '500px' : type === 'sm' ? '85%' : '93%'}`}
      height={`${isDesktop ? '500px' : type === 'sm' ? '430px' : '378px'}`}
      padding={`${isDesktop ? '30px' : type === 'sm' ? '50px' : '30px'}`}
    >
      <Heading
        as="h2"
        fontSize={+`${isDesktop ? 3.5 : type === 'sm' ? 3 : 2.5}`}
        color="#FFFFFF"
        margin="10px 0 35px 0"
        textAlign="center"
      >
        시작하기
      </Heading>
      <Container
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexFlow="column"
      >
        <Button
          aria-label="구글 로그인"
          width={`${isDesktop ? '320px' : type === 'xs' ? '225px' : '70%'}`}
          height={`${type === 'xs' ? '48px' : '66px'}`}
          borderRadius={30}
          background="#ffffff"
          margin={`${isMobile ? '0 0 20px 0' : '0 0 30px 0'}`}
          fontWeight={700}
          onClick={() => {
            window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
          }}
        >
          <IconContainer>
            <SVGIcon type={'Google'} width="30px" height="30px"></SVGIcon>
            <SVGIconName>Google</SVGIconName>
          </IconContainer>
        </Button>
        <Button
          aria-label="깃허브 로그인"
          width={`${isDesktop ? '320px' : type === 'xs' ? '225px' : '70%'}`}
          height={`${type === 'xs' ? '48px' : '66px'}`}
          borderRadius={30}
          background="#ffffff"
          fontWeight={700}
          margin={`${isMobile ? '0 0 10px 0' : ''}`}
          onClick={() => {
            window.location.href = `${process.env.REACT_APP_API_URL}/auth/github`;
          }}
        >
          <IconContainer>
            <SVGIcon type="GithubBlack" width="30px" height="30px"></SVGIcon>
            <SVGIconName>Github</SVGIconName>
          </IconContainer>
        </Button>
      </Container>
      <Container display="flex" alignItems="center" position="relactive">
        <DivisionDiv
          $width={`${isDesktop ? '146px' : type === 'sm' ? '80px' : '80px'}`}
          $fontSize={`${isDesktop ? '1.6rem' : '1.3rem'}`}
        >
          또는
        </DivisionDiv>
        <DivisionLine
          $height={`${isDesktop ? '44px' : type === 'sm' ? '20px' : '20px'}`}
          $marginBottom={`${isDesktop ? '42px' : type === 'sm' ? '20px' : '20px'}`}
        ></DivisionLine>
      </Container>
      <Heading
        as="h3"
        color="#FFFFFF"
        fontSize={isDesktop ? 2 : type === 'sm' ? 1.8 : 1.4}
        fontWeight={700}
        textAlign="center"
        margin={type === 'sm' ? '0 0 20px 0' : type === 'xs' ? '0 0 20px 0' : ''}
      >
        Suits에서 기술면접 준비하기
      </Heading>
      <LinkToWebSite
        href="http://13.125.254.219"
        target="_blank"
        $width={`${isDesktop ? '320px' : type === 'xs' ? '225px' : '70%'}`}
        $height={`${type === 'xs' ? '58px' : '66px'}`}
        $background="#ffffff"
        $borderRadius={30}
        $display="flex"
        $flexFlow="column"
        $alignItems="center"
        $justifyContent="center"
        $margin={`${isDesktop ? '21px auto' : '10px auto 0 auto '}`}
      >
        <Span fontSize={`${type === 'xs' ? 1.2 : 1.4}`} fontWeight={700} margin="0 0 4px 0">
          기술 면접을 준비하는 단정한 습관
        </Span>
        <SVGIcon type="Suits" />
      </LinkToWebSite>
    </ModalDialog>
  );
};
export default LoginModalDialog2;
