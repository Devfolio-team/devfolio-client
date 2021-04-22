import { number, string, oneOfType } from 'prop-types';
import { ReactComponent as Express } from 'assets/Express.svg';
import { ReactComponent as Javascript } from 'assets/Javascript.svg';
import { ReactComponent as MySQL } from 'assets/MySQL.svg';
import { ReactComponent as React } from 'assets/React.svg';
import { ReactComponent as Redux } from 'assets/Redux.svg';
import { ReactComponent as Sass } from 'assets/Sass.svg';
import { ReactComponent as StyledComponent } from 'assets/StyledComponent.svg';
import { ReactComponent as Typescript } from 'assets/Typescript.svg';

const SkillIcon = ({ type, width, height, ...restProps }) => {
  let SkillIcon = null;
  switch (type.toUpperCase()) {
    default:
    case 'EXPRESS':
      SkillIcon = Express;
      break;
    case 'JAVASCRIPT':
      SkillIcon = Javascript;
      break;
    case 'MYSQL':
      SkillIcon = MySQL;
      break;
    case 'REACT':
      SkillIcon = React;
      break;
    case 'REDUX':
      SkillIcon = Redux;
      break;
    case 'SASS':
      SkillIcon = Sass;
      break;
    case 'STYLEDCOMPONENT':
      SkillIcon = StyledComponent;
      break;
    case 'TYPESCRIPT':
      SkillIcon = Typescript;
      break;
  }
  return <SkillIcon width={width} heigth={height} {...restProps} />;
};

SkillIcon.defaultProps = {
  type: 'REACT',
};

SkillIcon.propTypes = {
  /** SkillIcon에 적용 할 width를 설정합니다. */
  width: oneOfType([string, number]),
  /** SkillIcon에 적용 할 height를 설정합니다. */
  height: oneOfType([string, number]),
  /** SkillIconn에 적용 할 type를 설정합니다. */
  type: string.isRequired,
  /** SkillIcon에 적용 할 색상을 설정합니다. */
  fill: string,
};

export default SkillIcon;
