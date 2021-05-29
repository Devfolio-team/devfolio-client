import ProjectSectionSkeleton from './ProjectSectionSkeleton';

export default {
  title: 'Component/ProjectSectionSkeleton',
  component: ProjectSectionSkeleton,

  parameters: {
    docs: {
      description: {
        component:
          '**ProjectSectionSkeleton** 는 프로젝트 페이지에서 서버에서 아직 데이터를 응답받지 못했을때 보여주는 반복되는 Section들의 모양을 렌더링해주는 스켈레톤 컴포넌트입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = () => <ProjectSectionSkeleton />;

export const ExampleProjectSectionSkeleton = Template.bind({});
