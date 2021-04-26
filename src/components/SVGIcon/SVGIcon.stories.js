import SVGIcon from './SVGIcon';

export default {
  title: 'Component/SVGIcon',
  component: SVGIcon,
  parameters: {
    docs: {
      description: {
        component: '**SVGIcon** 컴포넌트는 type을 받아서 아이콘을 사용 할 수 있습니다.',
      },
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: [
          'Angry',
          'Blog',
          'Email',
          'Empty',
          'GithubWhite',
          'GithubBlack',
          'GithubBlue',
          'GithubBlueDisable',
          'Google',
          'HeartBlack',
          'HeartEmpty',
          'HeartRed',
          'Sad',
          'Smile',
          'X',
          'Calendar',
          'WebSite',
          'WebSiteDisable',
        ],
      },
    },
    width: { control: 'number' },
    height: { control: 'number' },
  },
};

const Template = args => <SVGIcon {...args} />;

export const AngryIcon = Template.bind({});
export const BlogIcon = Template.bind({});
export const EmailIcon = Template.bind({});
export const EmptyIcon = Template.bind({});
export const GithubWhiteIcon = Template.bind({});
export const GithubBlackIcon = Template.bind({});
export const GoogleIcon = Template.bind({});
export const HeartBlackIcon = Template.bind({});
export const HeartEmptyIcon = Template.bind({});
export const HeartRedIcon = Template.bind({});
export const SadIcon = Template.bind({});
export const SmileIcon = Template.bind({});
export const XIcon = Template.bind({});
export const Calendar = Template.bind({});
export const GithubBlueIcon = Template.bind({});
export const GithubBlueDisableIcon = Template.bind({});
export const WebSiteIcon = Template.bind({});
export const WebSiteDisableIcon = Template.bind({});

AngryIcon.args = {
  type: 'Angry',
  width: 40,
  height: 40,
};
BlogIcon.args = {
  type: 'Blog',
  width: 40,
  height: 40,
};
EmailIcon.args = {
  type: 'Email',
  width: 40,
  height: 40,
};
EmptyIcon.args = {
  type: 'Empty',
  width: 40,
  height: 40,
};
GithubWhiteIcon.args = {
  type: 'GithubWhite',
  width: 40,
  height: 40,
  fill: '#cccccc',
};
GithubBlackIcon.args = {
  type: 'GithubBlack',
  width: 40,
  height: 40,
};
GoogleIcon.args = {
  type: 'Google',
  width: 40,
  height: 40,
};
HeartBlackIcon.args = {
  type: 'HeartBlack',
  width: 40,
  height: 40,
};
HeartEmptyIcon.args = {
  type: 'HeartEmpty',
  width: 40,
  height: 40,
};
HeartRedIcon.args = {
  type: 'HeartRed',
  width: 40,
  height: 40,
};
SadIcon.args = {
  type: 'Sad',
  width: 40,
  height: 40,
};
SmileIcon.args = {
  type: 'Smile',
  width: 40,
  height: 40,
};
XIcon.args = {
  type: 'X',
  width: 40,
  height: 40,
  fill: '#000000',
};
Calendar.arg = {
  type: 'Calendar',
  width: 15,
  height: 19,
};
GithubBlueIcon.arg = {
  type: 'GithubBlue',
  width: 40,
  height: 40,
};
GithubBlueDisableIcon.arg = {
  type: 'GithubBlueDisable',
  width: 40,
  height: 40,
};
WebSiteIcon.arg = {
  type: 'WebSite',
  width: 40,
  height: 40,
};
WebSiteDisableIcon.arg = {
  type: 'WebSiteDisable',
  width: 40,
  height: 40,
};
