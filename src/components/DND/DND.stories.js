import DND from './DND';

export default {
  title: 'Component/DND',
  component: DND,
  parameters: {
    docs: {
      description: {
        component: '**DND** 컴포넌트는 drap and drop으로 이미지를 업로트할 수 있는 컨트롤입니다.',
      },
    },
  },
};

const Template = args => <DND {...args} />;

export const ExampleButton = Template.bind({});
