import styled from 'styled-components';
import { number, string } from 'prop-types';

const StyledDialog = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: #2c3035;
  z-index: 10;
  margin: ${props => props.margin};
  padding: 30px;
  position: relative;
  border-radius: ${props => props.borderRadius}px;
`;

const Dialog = ({ children, ...restProps }) => (
  <StyledDialog {...restProps}>{children}</StyledDialog>
);

Dialog.propTypes = {
  /** Dialog에 적용 할 가로 너비를 px단위로 설정합니다. */
  width: number,
  /** Dialog에 적용 할 세로 높이를 px단위로 설정합니다. */
  height: number,
  /** Dialog에 적용 할 세로 높이를 px단위로 설정합니다. */
  margin: string,
  /** Dialog에 적용 할 모서리를 둥글게 px단위로 설정합니다. */
  borderRadius: number,
};

export default Dialog;
