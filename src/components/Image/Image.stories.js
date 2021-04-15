import Image from './Image';

export default {
  title: 'Component/Image',
  component: Image,
  parameters: {
    docs: {
      description: {
        component: '**Image** 컴포넌트는 문서애 이미지를 넣는 용도입니다. ',
      },
    },
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    objectFit: { control: 'text' },
    position: { control: 'text' },
    top: { control: 'text' },
    left: { control: 'text' },
    bottom: { control: 'text' },
    right: { control: 'text' },
    zIndex: { control: 'number' },
  },
};

const Template = args => <Image {...args} />;

export const ExampleImage = Template.bind({});
