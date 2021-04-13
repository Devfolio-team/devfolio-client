import { string } from 'prop-types';
import { ReactComponent as LogoBlack } from 'assets/LogoBlack.svg';
import { ReactComponent as LogoWhite } from 'assets/LogoWhite.svg';

const Logo = ({ type, width, height, ...restProps }) => {
  let Logo = null;

  Logo = type === 'Black' ? LogoBlack : LogoWhite;

  return <Logo width={width} height={height} {...restProps} />;
};

Logo.defaultProps = {
  type: 'Black',
};

Logo.propTypes = {
  /** Logo에 적용 할 type를 설정합니다. */
  type: string.isRequired,
};

export default Logo;
