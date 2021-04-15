import styled from 'styled-components';
import { number, string } from 'prop-types';
import { ReactComponent as Angry } from 'assets/Angry.svg';
import { ReactComponent as Blog } from 'assets/Blog.svg';
import { ReactComponent as Email } from 'assets/Email.svg';
import { ReactComponent as Empty } from 'assets/Empty.svg';
import { ReactComponent as GithubWhite } from 'assets/GithubWhite.svg';
import { ReactComponent as GithubBlack } from 'assets/GithubBlack.svg';
import { ReactComponent as Google } from 'assets/Google.svg';
import { ReactComponent as HeartBlack } from 'assets/HeartBlack.svg';
import { ReactComponent as HeartEmpty } from 'assets/HeartEmpty.svg';
import { ReactComponent as HeartRed } from 'assets/HeartRed.svg';
import { ReactComponent as Sad } from 'assets/Sad.svg';
import { ReactComponent as Smile } from 'assets/Smile.svg';
import { ReactComponent as X } from 'assets/X.svg';

const SVGIcon = ({ type, width, height, ...restProps }) => {
  let SVGIcon = null;
  switch (type) {
    default:
    case 'Angry':
      SVGIcon = Angry;
      break;
    case 'Blog':
      SVGIcon = Blog;
      break;
    case 'Email':
      SVGIcon = Email;
      break;
    case 'Empty':
      SVGIcon = Empty;
      break;
    case 'GithubWhite':
      SVGIcon = GithubWhite;
      break;
    case 'GithubBlack':
      SVGIcon = GithubBlack;
      break;
    case 'Google':
      SVGIcon = Google;
      break;
    case 'HeartBlack':
      SVGIcon = HeartBlack;
      break;
    case 'HeartEmpty':
      SVGIcon = HeartEmpty;
      break;
    case 'HeartRed':
      SVGIcon = HeartRed;
      break;
    case 'Sad':
      SVGIcon = Sad;
      break;
    case 'Smile':
      SVGIcon = Smile;
      break;
    case 'X':
      SVGIcon = X;
      break;
  }
  return <SVGIcon width={width} heigth={height} {...restProps} />;
};

SVGIcon.defaultProps = {
  type: 'Angry',
};

SVGIcon.propTypes = {
  /** SVGIcon에 적용 할 width를 설정합니다. */
  width: number,
  /** SVGIcon에 적용 할 height를 설정합니다. */
  height: number,
  /** SVGIcon에 적용 할 type를 설정합니다. */
  type: string.isRequired,
  /** SVGIcon에 적용 할 색상을 설정합니다. */
  fill: string,
};

export default SVGIcon;
