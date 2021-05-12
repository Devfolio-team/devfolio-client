import styled from 'styled-components';

const StyledHeaderBarBackground = styled.div`
  width: 100%;
  height: 64px;
  background: #000000;
  z-index: 9999;
  position: fixed;
`;
const HeaderBarBackground = ({ ...restProps }) => {
  return <StyledHeaderBarBackground $restProps={restProps} />;
};

export default HeaderBarBackground;
