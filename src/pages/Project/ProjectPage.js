import {
  Button,
  Container,
  Heading,
  Image,
  Paragraph,
  SkillIcon,
  Span,
  SVGIcon,
  Time,
} from 'components';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';

const StyledProjectPage = styled.main`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const StyledNinkName = styled.span`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const StyledLink = styled.a`
  ${props => css`
    ${applyStyle(props)}
  `}

  &:hover {
    background: #428bca;
    color: #fff;

    path {
      fill: #fff;
    }
  }
`;

const StyledIcon = styled(SVGIcon)`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const StyledDivisionLine = styled.div`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const StyledUl = styled.ul`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const StyledLi = styled.li`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const StyledButton = styled(Button)`
  &:hover {
    background: #e0e0e0;
    stroke: none;
    path {
      fill: #e74c3c;
    }
    svg {
      stroke: none;
    }
  }
`;

const StyledHeartIcon = styled(SVGIcon)`
  & {
    stroke: black;
  }
  path {
    fill: white;
  }
`;

const ProjectPage = ({ viewport }) => {
  const { isDesktop, vw, type } = viewport;
  const [scrollY, setScrollY] = useState(0);

  const onScroll = e => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', onScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  const skills = [
    'Javascript',
    'StyledComponenet',
    'Typescript',
    'Express',
    'React',
    'MySQL',
    'Redux',
    'Sass',
    'Node.js',
  ];

  // const code = `<h1>2021년 03월 11일 목요일 TIL (CDD, StoryBook, type검사)</h1><br/><h2>오늘 한 일과 느낀점</h2><br/><ul><li> <p>오전 10시 ~ 오후 5시 리액트 현강 이번주 목, 금은 하루에 리액트 강의 시간이 점심시간 제외하고 6시간이나 된다. 오전 시간은 어제 얘기하던 컴포넌트의 추가적인 개념으로 defaultProps와 propTypes에 대해 알려주셨다.</p></li><br/> <li> <p>추가적으로 자바스크립트의 typeof가 배열과 객체, null을 구분하지 못하는것을 어떻게 해결하는지 배웠다.</p> </li> </ul>;`;
  const code = `<pre class="lang-javascript"><code data-language="javascript">// 데이터 타입 검사 유틸리티 함수<br/> function validType(dataType, typeString) {   return Object.prototype.toString.call(dataType).slice(8,-1).toLowerCase() === typeString }  function calcTriangleCirc(x, y, z) {   // 데이터 타입 검사   if (      !validType(x, 'number') ||      !validType(y, 'number') ||      !validType(z, 'number')    ) {     throw new Error('전달되는 인자의 유형은 오직 숫자(number)여야 합니다.')   }   return x + y + z }`;

  // const names = [
  //   { name: '신봉철', github: 'https://github.com/bcround' },
  //   { name: '신봉철', github: 'https://github.com/bcround' },
  //   { name: '신봉철', github: 'https://github.com/bcround' },
  //   { name: '신봉철', github: 'https://github.com/bcround' },
  //   { name: '신봉철', github: 'https://github.com/bcround' },
  // ];

  return (
    <StyledProjectPage
      $width={isDesktop ? '768px' : '100%'}
      $margin="96px auto 0 auto"
      $background="#F8F9FA"
    >
      <Container
        width="100%"
        margin={isDesktop ? '0 30px 89px 0' : '0'}
        padding={isDesktop ? '0 70px' : '0 30px'}
        display="flex"
        justifyContent="space-between"
        position={vw > 840 ? 'relative' : ''}
      >
        {vw > 840 ? (
          <Container position="absolute" left="-10px">
            <Container
              display="flex"
              flexFlow="column"
              justifyContent="center"
              alignItems="center"
              margin="0"
              position={scrollY > 0 ? 'fixed' : ''}
              transform={scrollY > 130 ? 'translate3D(0, 130px, 0)' : ''}
              transition="0.5s"
            >
              <StyledButton
                borderRadius="50%"
                background="inherit"
                border="1px solid #A3ABB3"
                width="44px"
                height="44px"
                padding="0"
              >
                <StyledHeartIcon type="HeartRed" width={20} height={20}></StyledHeartIcon>
              </StyledButton>
              <Span fontSize="16px" lineHeight="16px" margin="0px 0 0 0">
                1255
              </Span>
            </Container>
          </Container>
        ) : (
          ''
        )}
        <Container display="flex" alignItems="center" width="215px" margin="0">
          <Time
            margin={type === 'xs' ? '0 10px 0 0' : '0 43px 0 0'}
            fontSize={1.6}
            dateTime="2021-03-30T06:00:56.555Z"
          >
            2021.03.30
          </Time>
          <Container margin="0">
            <Image
              src="https://avatars.githubusercontent.com/u/72919631?s=400&u=da82fb308f90b7ac6d6b03148c8475641e31e703&v=4"
              alt="닉네임프로필사진"
              width="24px"
              height="24px"
              borderRadius="50%"
            />
            <StyledNinkName $width="35px" $lineHeight="16px" $fontSize="16px" $marginLeft="10px">
              닉네임
            </StyledNinkName>
          </Container>
        </Container>
        {vw > 840 ? (
          ''
        ) : (
          <StyledButton
            borderRadius="5px"
            background="inherit"
            border="1px solid #A3ABB3"
            width="102px"
            height="44px"
            padding="0"
          >
            <Container display="flex" justifyContent="center" alignItems="center" margin="0">
              <SVGIcon type="HeartEmpty" width={20} height={20}></SVGIcon>
              <Span fontSize="16px" lineHeight="16px" margin="0">
                1255
              </Span>
            </Container>
          </StyledButton>
        )}
      </Container>
      <Container margin="0 0 32px 0" padding={isDesktop ? '0 70px' : '0 30px'}>
        <Heading
          as="h3"
          fontSize={type === 'xs' ? 2.7 : 4}
          color="#212121"
          lineHeight="40px"
          margin={type === 'xs' ? '' : '20px 0'}
        >
          프로젝트 이름
        </Heading>
        <Span
          fontSize={type === 'xs' ? 1.8 : 2}
          lineHeight={type === 'xs' ? '' : '10px'}
          color="#212121"
        >
          BHC 팀
        </Span>
      </Container>
      <Container
        display={type === 'xs' ? '' : 'flex'}
        justifyContent={type === 'xs' ? '' : 'space-between'}
        margin="0 0 22px 0"
        padding={isDesktop ? '0 70px' : '0 30px'}
      >
        <StyledLink
          href="http://naver.com"
          target="_blank"
          $fontSize={1.6}
          $fontWeight="700"
          $borderRadius={5}
          $border="1px solid #428BCA"
          $width={type === 'xs' ? '100%' : '200px'}
          $marginBottom={type === 'xs' ? '5px' : ''}
          $height="44px"
          $textAlign="center"
          $lineHeight="40px"
          $color="#428BCA"
          $background="#FFFFFF"
          $display="flex"
          $justifyContent="center"
          $alignItems="center"
        >
          <StyledIcon type="WebSite" $margin="0 7px 0 0" $width={20} $height={20} />
          Visit the Website
        </StyledLink>
        <StyledLink
          href="https://github.com/choisuhyeok1255"
          target="_blank"
          $fontSize={1.6}
          $fontWeight="700"
          $borderRadius={5}
          $border="1px solid #428BCA"
          $width={type === 'xs' ? '100%' : '145px'}
          $height="44px"
          $textAlign="center"
          $lineHeight="40px"
          $color="#428BCA"
          $background="#FFFFFF"
          $display="flex"
          $justifyContent="center"
          $alignItems="center"
        >
          <StyledIcon type="GithubBlue" $marginRight="9px" $width={20} $height={20} />
          GitHub
        </StyledLink>
      </Container>
      <Container padding={isDesktop ? '0 70px' : '0 30px'}>
        <Image
          src="https://github.com/HaJunRyu/FDS18_RWD/raw/master/_ASSETS_/cover.jpg"
          alt="예시 이미지"
          width="100%"
          borderRadius="10px"
        />
      </Container>
      <StyledDivisionLine
        $width={isDesktop ? '500px' : '70%'}
        $borderBottom="1px solid #666666"
        $margin="80px auto"
      />
      <Container margin=" 0 0 80px 0" padding={isDesktop ? '70px' : '30px'}>
        <Heading
          as="h3"
          color="#212121"
          fontWeight={700}
          fontSize="3"
          borderBottom="14px solid rgba(66, 139, 202, 0.6)"
          width="142px"
          textAlign="center"
          lineHeight="10px"
          margin="0 0 47px 0"
        >
          기획 의도
        </Heading>
        <Paragraph
          color="#666666"
          fontSize={1.6}
          fontWeight="700"
          lineHeight="25px"
          padding="0 15px"
        >
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </Paragraph>
      </Container>
      <StyledDivisionLine
        $width={isDesktop ? '500px' : '70%'}
        $borderBottom="1px solid #666666"
        $margin="80px auto"
      />

      {/* <Container padding={isDesktop ? '0 70px' : '0 30px'}>
        <Heading
          as="h3"
          color="#212121"
          fontWeight={700}
          fontSize="3"
          borderBottom="14px solid rgba(66, 139, 202, 0.6)"
          width="142px"
          textAlign="center"
          lineHeight="10px"
          margin="0 0 47px 0"
        >
          팀원 목록
        </Heading>
        <StyledUl $display="flex" $flexDirection="row" $flexWrap="wrap">
          {names.map((name, index) => (
            <StyledLi
              $width={isDesktop ? '50%' : type === 'sm' ? '100%' : '100%'}
              $margin={isDesktop ? '0 0 50px 0' : '0 0 20px 0'}
              key={index}
            >
              <Container textAlign="center">
                <Span
                  display="inline-block"
                  color="#666666"
                  fontSize={1.6}
                  width="74px"
                  textAlign="center"
                  borderRight={type === 'xs' ? ' ' : '2px solid #A9C1FF'}
                  marginRight={type === 'xs' ? ' ' : '30px'}
                  marginBottom={type === 'xs' ? '10px' : ''}
                >
                  {name.name}
                </Span>
                <StyledLink
                  href="https://github.com/bcround"
                  target="_blank"
                  $color="#666666"
                  $fontSize={1.3}
                >
                  {name.github}
                </StyledLink>
                {/* 타입이 xs일때만 팀원 목록 밑으로 구분선 생성 */}
      {/* {type === 'xs' ? (
                  index < names.length - 1 ? (
                    <StyledDivisionLine
                      $margin="0 auto"
                      $width="10%"
                      $borderBottom="1px solid #A9C1FF"
                      $padding="10px 0"
                    />
                  ) : (
                    ''
                  )
                ) : (
                  ''
                )}
              </Container>
            </StyledLi>
          ))}
        </StyledUl>
      </Container> 
      <StyledDivisionLine
        $width={isDesktop ? '500px' : '70%'}
        $borderBottom="1px solid #666666"
        $margin="80px auto"
      />*/}
      <Container width={isDesktop ? '788px' : '100%'} padding={isDesktop ? '0 70px' : '0 30px'}>
        <Heading
          as="h3"
          color="#212121"
          fontWeight={700}
          fontSize="3"
          borderBottom="14px solid rgba(66, 139, 202, 0.6)"
          width="217px"
          textAlign="center"
          lineHeight="10px"
          margin="0 0 47px 0"
        >
          사용 기술 스택
        </Heading>
        <StyledUl
          $margin="0 auto"
          $width="100%"
          $padding={isDesktop ? '0 100px' : '0 30px'}
          $display="flex"
          $flexWrap="wrap"
          $justifyContent="space-between"
        >
          {skills.map((skill, index) => (
            <StyledLi
              $display="flex"
              $width={vw > 600 ? '50%' : '100%'}
              $margin="0 0 20px 0"
              key={index}
            >
              <Container
                display="flex"
                justifyContent="center"
                alignItems="center"
                margin="0"
                width="100%"
              >
                <SkillIcon type={skill} width={60} height={60}></SkillIcon>
                <Span
                  color="#666666"
                  fontSize={1.6}
                  fontWeight="700"
                  width={isDesktop ? '200px' : type === 'sm' ? '100px' : '100px'}
                  textAlign="left"
                  marginLeft={isDesktop ? '30px' : '10px'}
                >
                  {skill}
                </Span>
              </Container>
            </StyledLi>
          ))}
        </StyledUl>
      </Container>
      <StyledDivisionLine
        $width={isDesktop ? '500px' : '70%'}
        $borderBottom="1px solid #666666"
        $margin="80px auto"
      />
      <Container margin="0 0 160px 0" padding={isDesktop ? '0 70px' : '0 30px'}>
        <Heading
          as="h3"
          color="#212121"
          fontWeight={700}
          fontSize="3"
          borderBottom="14px solid rgba(66, 139, 202, 0.6)"
          width="217px"
          textAlign="center"
          lineHeight="10px"
          margin="0 0 47px 0"
        >
          프로젝트 설명
        </Heading>
        <Time dateTime="2021-03-30T06:00:56.555Z">21.03.02</Time>
        <Span> ~ </Span>
        <Time dateTime="2021-03-30T06:00:56.555Z">21.03.29</Time>
        <div dangerouslySetInnerHTML={{ __html: code }}></div>
      </Container>
    </StyledProjectPage>
  );
};

ProjectPage.defaultProps = {};

ProjectPage.propTypes = {};

export default ProjectPage;
