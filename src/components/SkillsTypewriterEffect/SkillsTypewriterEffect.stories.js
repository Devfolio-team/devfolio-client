import SkillsTypewriterEffect from './SkillsTypewriterEffect';

export default {
  title: 'Component/SkillsTypewriterEffect',
  component: SkillsTypewriterEffect,
  parameters: {
    docs: {
      description: {
        component:
          '**SkillsTypewriterEffect** 은 유저의 기술스택이 담긴 배열을 전달해주면 해당 기술스택의 이미지와 텍스트를 타이핑 하듯이 렌더링 해줍니다.',
      },
    },
  },
  argTypes: {
    skills: { control: 'array' },
  },
};

const Template = args => <SkillsTypewriterEffect {...args} />;

export const ExampleSkillsTypewriterEffect = Template.bind({});

ExampleSkillsTypewriterEffect.args = {
  skills: ['React', 'Javascript', 'CSS3', 'HTML5'],
};
