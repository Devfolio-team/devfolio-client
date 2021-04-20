import { Button } from 'components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signOutMiddleware } from 'store/modules/auth/authMiddleware';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';
import { oneOf, oneOfType, string, number } from 'prop-types';

const StyledUl = styled.ul`
  ${props =>
    css`
      ${applyStyle(props)}
      width: 170px;
      color: #ffffff;
      font-size: 1.6rem;
      font-weight: 700;
      position: absolute;
      top: 70px;
      right: 0;
      background: #ffffff;
      box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
      text-align: center;
      margin: 0 70px 0 0;
      border-radius: 2px;
      transition: 0.5s;
      overflow: hidden;
    `}
`;

const StyledLink = styled(Link)`
  ${props => css`
    ${applyStyle(props)}
    font-size: 1.6rem;
    font-weight: 700;
    display: block;
    width: 100%;
    border-bottom: 1px solid #d5d5d5;
    &:hover {
      background: #f0f0f0;
    }
    &:focus:not(:focus-visible) {
      outline: none;
    }
  `}
`;

const StyledUserNavigatorMenuItem = styled.li`
  ${props => css`
    ${applyStyle(props)}
  `}
`;

const UserNavigator = ({ height, tabIndex, navigatorTabCloseHandler, ...restProps }) => {
  const { currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const history = useHistory();

  const onSignOutHandler = () => {
    dispatch(signOutMiddleware());
    history.push('/');
  };

  return (
    <StyledUl $height={height} {...restProps}>
      <StyledUserNavigatorMenuItem $color="#ffffff" $fontSize={1.6} $fontWeight={700}>
        <StyledLink
          to={`/portfolio/${currentUser ? currentUser.user_id : ''}`}
          $padding="20px"
          tabIndex={tabIndex}
        >
          내 포트폴리오
        </StyledLink>
      </StyledUserNavigatorMenuItem>
      <StyledUserNavigatorMenuItem>
        <StyledLink
          to={`/edit/portfolio/${currentUser ? currentUser.user_id : ''}`}
          $padding="20px"
          tabIndex={tabIndex}
        >
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
          borderRadius={0}
          width="100%"
          height="100%"
          hoverBackground="#F0F0F0"
          onClick={onSignOutHandler}
          onKeyDown={navigatorTabCloseHandler}
          tabIndex={tabIndex}
        >
          로그아웃
        </Button>
      </StyledUserNavigatorMenuItem>
    </StyledUl>
  );
};

UserNavigator.defaultProps = {
  tabIndex: -1,
};

UserNavigator.propTypes = {
  height: oneOfType([string, number]),
  tabIndex: oneOf([-1, 0]),
};

export default UserNavigator;
