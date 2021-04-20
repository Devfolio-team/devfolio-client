import SkillIcon from './SkillIcon';

export default {
  title: 'Component/SkillIcon',
  component: SkillIcon,
  parameters: {
    docs: {
      description: {
        component: '**SkillIcon** 컴포넌트는 type을 받아서 기술스택아이콘을 사용 할 수 있습니다.',
      },
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: [
          'Express',
          'Javascript',
          'MySQL',
          'React',
          'Redux',
          'Sass',
          'StyledComponent',
          'Typescript',
        ],
      },
    },
    width: { control: 'number' },
    height: { control: 'number' },
  },
};

const Template = args => <SkillIcon {...args} />;

export const ExpressIcon = Template.bind({});
export const JavascriptIcon = Template.bind({});
export const MySQLIcon = Template.bind({});
export const ReactIcon = Template.bind({});
export const ReduxIcon = Template.bind({});
export const SassIcon = Template.bind({});
export const StyledComponentIcon = Template.bind({});
export const TypescriptIcon = Template.bind({});

ExpressIcon.args = {
  type: 'Express',
  width: 40,
  height: 40,
};
JavascriptIcon.args = {
  type: 'Javascript',
  width: 40,
  height: 40,
};
MySQLIcon.args = {
  type: 'Mysql',
  width: 40,
  height: 40,
};
ReactIcon.args = {
  type: 'React',
  width: 40,
  height: 40,
};
ReduxIcon.args = {
  type: 'Redux',
  width: 40,
  height: 40,
  fill: '#cccccc',
};
SassIcon.args = {
  type: 'Sass',
  width: 40,
  height: 40,
};
StyledComponentIcon.args = {
  type: 'StyledComponent',
  width: 40,
  height: 40,
};
TypescriptIcon.args = {
  type: 'Typescript',
  width: 40,
  height: 40,
};
