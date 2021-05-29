import Skeleton from '@yisheng90/react-loading';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';

const StyledSkeletonUI = styled(Skeleton)`
  ${props => css`
    &&&& {
      ${applyStyle(props)}
    }
  `}
`;

export default function SkeletonUI({ ...restProps }) {
  return <StyledSkeletonUI {...restProps} />;
}
