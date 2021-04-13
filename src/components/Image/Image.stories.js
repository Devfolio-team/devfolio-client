import Image from './Image';

export default {
  title: 'Component/Image',
  component: Image,
  parameters: {
    docs: {
      description: {
        component: '**이미지** 컴포넌트는 문서애 이미지를 넣는 용도입니다. ',
      },
    },
  },
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    objectFit: { control: 'text' },
    position: { control: 'text' },
    top: { control: 'number' },
    left: { control: 'number' },
    bottom: { control: 'number' },
    right: { control: 'number' },
    zIndex: { control: 'number' },
  },
};

const Template = args => <Image {...args} />;

export const ExampleImage = Template.bind({});
