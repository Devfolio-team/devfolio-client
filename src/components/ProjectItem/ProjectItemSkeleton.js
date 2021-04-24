import Skeleton from '@yisheng90/react-loading';
import { Container, Span } from 'components';
import SVGIcon from 'components/SVGIcon/SVGIcon';
import React from 'react';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';
import { ReactComponent as LoadingSpinner } from 'assets/LoadingSpinner.svg';

const StyledProjectItemSkeleton = styled.li`
  ${props =>
    css`
      ${applyStyle(props)}
      display: inline-block;
      height: 100%;
      border: 1px solid transparent;
      border-radius: 5px;
      overflow: hidden;
    `}
`;

const SkeletonUI = styled(Skeleton)`
  ${props => css`
    &&&& {
      ${applyStyle(props)}
    }
  `}
`;

const ProjectItemSkeleton = ({ width, margin, containerMinHeight }) => {
  return (
    <StyledProjectItemSkeleton $width={width} $margin={margin}>
      <Container borderBottom="1px solid rgb(230, 230, 230)">
        <SkeletonUI $height={containerMinHeight} color="#dddddd" $margin="0" $borderRadius={0} />
      </Container>
      <Container width="100%" height={167} padding="16px" background="#FFFFFF">
        <Container margin="0 0 10px 0">
          <Skeleton color="#cccccc" height={16} translucent />
        </Container>
        <Container margin="0 0 18px 0">
          <SkeletonUI color="#cccccc" $height={14} rows={4} translucent />
        </Container>
        <SkeletonUI color="#cccccc" $width={100} $height={12} translucent />
      </Container>
      <Container
        width="100%"
        height={44}
        padding="10px 16px"
        background="#FFFFFF"
        borderTop="1px solid #E6E6E6"
        display="flex"
        flexFlow="row nowrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Container
          display="flex"
          alignItems="center"
          margin="0"
          padding="0 5px 0 0"
          cursor="pointer"
        >
          <SkeletonUI
            $display="inline-block"
            $width={24}
            $height={24}
            $margin="0"
            circle
            color="#cccccc"
            translucent
          />
          <SkeletonUI
            $display="inline-block"
            color="#cccccc"
            $width={80}
            $height={16}
            $margin="0 0 0 8px"
            translucent
          />
        </Container>
        <Container margin="0" display="flex" justifyContent="end" alignItems="center">
          <SVGIcon type="HeartRed" width="12" height="18" />
          <Span marginLeft={5} />
          <LoadingSpinner width="14" height="14" />
        </Container>
      </Container>
    </StyledProjectItemSkeleton>
  );
};

export default ProjectItemSkeleton;
