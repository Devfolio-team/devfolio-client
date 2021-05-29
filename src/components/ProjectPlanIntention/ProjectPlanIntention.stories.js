import { default as ProjectPlanIntention } from './ProjectPlanIntention';

export default {
  title: 'Component/ProjectPlanIntention',
  component: ProjectPlanIntention,

  parameters: {
    docs: {
      description: {
        component:
          '**ProjectPlanIntention** 는 프로젝트의 기획 의도 및 소개를 렌더링해주는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <ProjectPlanIntention {...args} />;

export const ExampleProjectPlanIntention = Template.bind({});

ExampleProjectPlanIntention.args = {
  planIntention:
    '프로젝트가 끝난 후 하드디스크 또는 github 저장소에만 잠들어 있는게 아닌 여러사람에게 프로젝트를 공유하며 공유받고 더 넓은 생각을 하게 해주는 웹 애플리케이션 입니다.',
};
