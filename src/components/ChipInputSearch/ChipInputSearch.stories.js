import ChipInputSearch from './ChipInputSearch';

export default {
  title: 'Component/ChipInputSearch',
  component: ChipInputSearch,
  parameters: {
    docs: {
      description: {
        component:
          '**ChipInputSearch** 컴포넌트는 input창에 검색을 하여 나온 결과를 chip으로 만들어주어 사용자에게 보여줍니다.',
      },
    },
  },
  argTypes: {
    id: { control: 'text' },
  },
};

const Template = args => <ChipInputSearch {...args} />;

export const ExampleChipInputSearch = Template.bind({});

ExampleChipInputSearch.args = {
  id: 'exId1',
};
