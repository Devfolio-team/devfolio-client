import Skeleton from '@yisheng90/react-loading';

export default {
  title: 'Component/Skeleton',
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component:
          '**Skeleton** 페이지에 필요한 리소스가 다운로드가 되기 전 사용자에게 보여질 페이지의 뼈대를 보여주는 컴포넌트입니다..',
      },
    },
  },
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    circle: { control: 'boolean' },
    color: { control: 'color' },
    translucent: { control: 'boolean' },
  },
};

const Template = args => <Skeleton {...args} />;

export const ExampleSkeleton = Template.bind({});

ExampleSkeleton.args = {
  width: 300,
  height: 35,
  color: '#cccccc',
};
