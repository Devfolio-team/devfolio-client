import styled from 'styled-components';
import { number, string } from 'prop-types';
import { ReactComponent as LogoBlack } from 'assets/LogoBlack.svg';
import { ReactComponent as LogoWhite } from 'assets/LogoWhite.svg';

const StyledLogoBlack = styled(LogoBlack)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const StyledLogoWhite = styled(LogoWhite)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const Logo = ({ type, width, height, ...restProps }) => {
  return type === 'Black' ? (
    <StyledLogoBlack width={width} height={height} {...restProps} />
  ) : (
    <StyledLogoWhite width={width} height={height} {...restProps} />
  );
};

Logo.propTypes = {
  /** Logo에 적용 할 width를 설정합니다. */
  width: number,
  /** Logo에 적용 할 height를 설정합니다. */
  height: number,
  /** Logo에 적용 할 type를 설정합니다. */
  type: string.isRequired,
};

export default Logo;
