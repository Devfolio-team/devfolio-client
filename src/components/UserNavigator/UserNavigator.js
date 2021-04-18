import { Button } from 'components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutMiddleware } from 'store/modules/auth/authMiddleware';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';

const StyledUl = styled.ul`
  ${props =>
    css`
      ${applyStyle(props)}
      color: #ffffff;
      font-size: 1.6rem;
      font-weight: 700;
      position: absolute;
      top: 70px;
      right: 0;
      background: #ffffff;
      boxshadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
      text-align: center;
      margin: 0 70px 0 0;
    `}
`;

const StyledLink = styled(Link)`
  ${props => css`
    ${applyStyle(props)}
    font-size: 1.6rem;
    font-weight: 700;
    display: block;
    width: 100%;
  `}
`;

const StyledUserNavigatorMenuItem = styled.li`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const UserNavigator = () => {
  const dispatch = useDispatch();

  const onSignOutHandler = () => {
    dispatch(signOutMiddleware());
  };

  return (
    <StyledUl>
      <StyledUserNavigatorMenuItem $color="#ffffff" $fontSize={1.6} $fontWeight={700}>
        <StyledLink to="/" $padding="20px">
          내 포트폴리오
        </StyledLink>
      </StyledUserNavigatorMenuItem>
      <StyledUserNavigatorMenuItem>
        <StyledLink to="/" $padding="20px">
          설정
        </StyledLink>
      </StyledUserNavigatorMenuItem>
      <StyledUserNavigatorMenuItem>
        <Button
          background="transparent"
          fontSize={1.6}
          fontWeight={700}
          padding="20px"
          margin="0"
          border="0"
          width="100%"
          height="100%"
          onClick={onSignOutHandler}
        >
          로그아웃
        </Button>
      </StyledUserNavigatorMenuItem>
    </StyledUl>
  );
};

export default UserNavigator;
