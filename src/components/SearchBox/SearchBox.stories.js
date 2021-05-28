import SearchBox from './SearchBox';

export default {
  title: 'Component/SearchBox',
  component: SearchBox,
  parameters: {
    docs: {
      description: {
        component: '**SearchBox** 컴포넌트는 검색을 할 수 있는 인풋이 들어있는 검색 창입니다.',
      },
    },
  },
  argTypes: {
    margin: { control: 'text' },
    value: { control: 'text' },
  },
};

const Template = args => <SearchBox {...args} />;

export const ExampleSearchBox = Template.bind({});
