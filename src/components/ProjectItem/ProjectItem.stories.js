import { ProjectItem } from 'components';

export default {
  title: 'Component/ProjectItem',
  component: ProjectItem,
  parameters: {
    docs: {
      description: {
        component:
          '**ProjectItem** 컴포넌트는 홈페이지와 포트폴리오 페이지에서 하나의 프로젝트에 대한 데이터를 데이터베이스에서 받아 렌더링 해줍니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => (
  <ul>
    <ProjectItem {...args} />
  </ul>
);

export const ExampleProjectItem = Template.bind({});

ExampleProjectItem.args = {
  thumbnail:
    'https://github.com/TEAM-SUITS/Suits/raw/develop/client/public/assets/og-image.jpg?raw=true',
  subject: 'Suits',
  planIntention: `Suits는 예비 개발자분들을 위한 기술 면접 대비 질문, 답변 공유 애플리케이션입니다.
  대중교통에서도, 주문한 음식을 기다릴 때도! 바쁜 일상 속에서 언제든 부담 없이 꺼내에 볼 수 있는 애플리케이션으로서, 예비 개발자분들이 꿈을 향해 가는 과정에 함께 하겠습니다. 😊`,
  created: '2021-04-19T04:53:50.931Z',
  author: 'minki607',
  authorProfile: 'https://avatars.githubusercontent.com/u/40879385?s=64&v=4',
  likeCount: 20,
};
