import SkillIconItem from './SkillIconItem';

export default {
  title: 'Component/SkillIconItem',
  component: SkillIconItem,
  parameters: {
    docs: {
      description: {
        component:
          '**SkillIconItem** 은 type에 기술스택을 전달해주면 해당 기술스택의 이미지와 텍스트를 렌더링 해줍니다.',
      },
    },
  },
  argTypes: {
    type: { control: 'text' },
  },
};

const Template = args => (
  <ul>
    <SkillIconItem {...args} />
  </ul>
);

export const React = Template.bind({});
export const Vue = Template.bind({});

React.args = {
  type: 'React',
  title: 'react 아이콘',
};

Vue.args = {
  type: 'Vue',
  title: 'vue 아이콘',
};
