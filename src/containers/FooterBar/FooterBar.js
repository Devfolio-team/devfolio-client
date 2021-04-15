import { Anchor, Container, SVGIcon } from 'components';
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100vw;
  height: 124px;
  background: ${({ background }) => background};
  padding: ${({ padding }) => padding};
  color: #868e96;
`;

const FooterBar = () => {
  return (
    <StyledFooter background="#25272B" padding="20px">
      <Container $textAlign="center">
        <Anchor
          href="https://github.com/Devfolio-team"
          target="_blank"
          $width={35}
          $height={35}
          aria-label="Devfolio 저장소로 이동"
          title="Devfolio 저장소로 이동"
        >
          <SVGIcon type="GithubWhite" width={35} height={35} />
        </Anchor>
        <Container margin="30px auto 0">
          <Anchor
            target="_blank"
            $color="#868E96"
            $fontSize={1.4}
            href="https://github.com/HaJunRyu"
            aria-label="류하준의 Github 저장소로 이동"
            title="류하준의 Github 저장소로 이동"
          >
            류하준
          </Anchor>
          ·
          <Anchor
            target="_blank"
            $color="#868E96"
            $fontSize={1.4}
            href="https://github.com/bcround"
            $margin="0 5px"
            aria-label="신봉철의 Github 저장소로 이동"
            title="신봉철의 Github 저장소로 이동"
          >
            신봉철
          </Anchor>
          ·
          <Anchor
            target="_blank"
            $color="#868E96"
            $fontSize={1.4}
            href="https://github.com/choisuhyeok1255"
            $margin="0 0 0 5px"
            aria-label="최수혁의 Github 저장소로 이동"
            title="최수혁의 Github 저장소로 이동"
          >
            최수혁
          </Anchor>
        </Container>
      </Container>
    </StyledFooter>
  );
};

export default FooterBar;
