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

const StyledAngry = styled(Angry)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const StyledBlog = styled(Blog)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const StyledEmail = styled(Email)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const StyledEmpty = styled(Empty)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const StyledGithubWhite = styled(GithubWhite)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const StyledGithubBlack = styled(GithubBlack)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const StyledGoogle = styled(Google)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const StyledHeartBlack = styled(HeartBlack)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const StyledHeartEmpty = styled(HeartEmpty)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const StyledHeartRed = styled(HeartRed)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const StyledSad = styled(Sad)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const StyledSmile = styled(Smile)`
  width: ${props => props.width}px;
  height: ${props => props.heigth}px;
`;

const SVGIcon = ({ type, width, height, ...restProps }) => {
  switch (type) {
    default:
    case 'Angry':
      return <StyledAngry width={width} height={height} {...restProps} />;
    case 'Blog':
      return <StyledBlog width={width} height={height} {...restProps} />;
    case 'Email':
      return <StyledEmail width={width} height={height} {...restProps} />;
    case 'Empty':
      return <StyledEmpty width={width} height={height} {...restProps} />;
    case 'GithubWhite':
      return <StyledGithubWhite width={width} height={height} {...restProps} />;
    case 'GithubBlack':
      return <StyledGithubBlack width={width} height={height} {...restProps} />;
    case 'Google':
      return <StyledGoogle width={width} height={height} {...restProps} />;
    case 'HeartBlack':
      return <StyledHeartBlack width={width} height={height} {...restProps} />;
    case 'HeartEmpty':
      return <StyledHeartEmpty width={width} height={height} {...restProps} />;
    case 'HeartRed':
      return <StyledHeartRed width={width} height={height} {...restProps} />;
    case 'Sad':
      return <StyledSad width={width} height={height} {...restProps} />;
    case 'Smile':
      return <StyledSmile width={width} height={height} {...restProps} />;
  }
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
};

export default SVGIcon;
