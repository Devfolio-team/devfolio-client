import LikeButton from './LikeButton';

export default {
  title: 'Component/LikeButton',
  component: LikeButton,
  parameters: {
    docs: {
      description: {
        component:
          '**LikeButton** 컴포넌트는 프로젝트 조회페이지에서 좋아요를 누를 수 있는 기능을 수행해주는 버튼입니다. 뷰포트에 따라 스타일이 바뀝니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <LikeButton {...args} />;

export const ExampleLikeButton = Template.bind({});

ExampleLikeButton.args = {
  isLike: true,
  likeCount: 5,
  onLikeCountPlusHandler() {},
};
