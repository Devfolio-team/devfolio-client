import Selectbox from './Selectbox';

export default {
  title: 'Component/Selectbox',
  component: Selectbox,
  parameters: {
    docs: {
      description: {
        component: '**Selectbox** 컴포넌트는 옵션 메뉴를 제공하는 컨트롤 입니다.',
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
    label: { control: 'text' },
    name: { control: 'text' },
  },
};

const Template = args => <Selectbox {...args} />;

export const ExampleSelectbox = Template.bind({});

ExampleSelectbox.args = {
  label: 'Example',
  id: 'exSelectbox1',
  name: 'exSelectbox',
};
