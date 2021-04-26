import { ProjectItem } from 'components';
import ProjectList from './ProjectList';

export default {
  title: 'Container/ProjectList',
  component: ProjectList,
  parameters: {
    docs: {
      description: {
        component:
          '**ProjectList** 컨테이너 컴포넌트는 프로젝트 리스트들을 렌더링 해주는 컨테이너 컴포넌트입니다.. ',
      },
    },
  },
  argTypes: {},
};

const Template = args => <ProjectList {...args}>{args.children}</ProjectList>;

export const ExampleProjectList = Template.bind({});

ExampleProjectList.args = {
  children: (
    <>
      <ProjectItem
        thumbnail="https://github.com/TEAM-SUITS/Suits/raw/develop/client/public/assets/og-image.jpg?raw=true"
        subject="Suits"
        planIntention="Suits는 예비 개발자분들을 위한 기술 면접 대비 질문, 답변 공유 애플리케이션입니다.
      대중교통에서도, 주문한 음식을 기다릴 때도! 바쁜 일상 속에서 언제든 부담 없이 꺼내에 볼 수 있는 애플리케이션으로서, 예비 개발자분들이 꿈을 향해 가는 과정에 함께 하겠습니다. 😊"
        created="2021-04-19T04:53:50.931Z"
        author="minki607"
        authorProfile="https://avatars.githubusercontent.com/u/40879385?s=64&v=4"
        likeCount="20"
      />
      <ProjectItem
        thumbnail="https://github.com/TEAM-SUITS/Suits/raw/develop/client/public/assets/og-image.jpg?raw=true"
        subject="Suits"
        planIntention="Suits는 예비 개발자분들을 위한 기술 면접 대비 질문, 답변 공유 애플리케이션입니다.
      대중교통에서도, 주문한 음식을 기다릴 때도! 바쁜 일상 속에서 언제든 부담 없이 꺼내에 볼 수 있는 애플리케이션으로서, 예비 개발자분들이 꿈을 향해 가는 과정에 함께 하겠습니다. 😊"
        created="2021-04-19T04:53:50.931Z"
        author="minki607"
        authorProfile="https://avatars.githubusercontent.com/u/40879385?s=64&v=4"
        likeCount="20"
      />
      <ProjectItem
        thumbnail="https://github.com/TEAM-SUITS/Suits/raw/develop/client/public/assets/og-image.jpg?raw=true"
        subject="Suits"
        planIntention="Suits는 예비 개발자분들을 위한 기술 면접 대비 질문, 답변 공유 애플리케이션입니다.
      대중교통에서도, 주문한 음식을 기다릴 때도! 바쁜 일상 속에서 언제든 부담 없이 꺼내에 볼 수 있는 애플리케이션으로서, 예비 개발자분들이 꿈을 향해 가는 과정에 함께 하겠습니다. 😊"
        created="2021-04-19T04:53:50.931Z"
        author="minki607"
        authorProfile="https://avatars.githubusercontent.com/u/40879385?s=64&v=4"
        likeCount="20"
      />
    </>
  ),
};
