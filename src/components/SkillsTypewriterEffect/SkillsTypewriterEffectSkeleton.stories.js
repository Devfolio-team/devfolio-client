import SkillsTypewriterEffectSkeleton from './SkillsTypewriterEffectSkeleton';

export default {
  title: 'Component/SkillsTypewriterEffectSkeleton',
  component: SkillsTypewriterEffectSkeleton,
  parameters: {
    docs: {
      description: {
        component:
          '**SkillsTypewriterEffectSkeleton** 은 SkillsTypewriterEffect 컴포넌트의 데이터가 로드 되기 전 보여지는 UI 요소입니다.',
      },
    },
  },
  argTypes: {
    skills: { control: 'array' },
  },
};

const Template = args => <SkillsTypewriterEffectSkeleton />;

export const ExampleSkillsTypewriterEffectSkeleton = Template.bind({});
