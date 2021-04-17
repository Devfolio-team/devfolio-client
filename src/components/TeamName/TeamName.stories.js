import TeamName from './TeamName';

export default {
  title: 'Component/TeamName',
  component: TeamName,
  parameters: {
    docs: {
      description: {
        component:
          '**TeamName** 프로젝트이름, 부가 설명, 그리고 프로젝트이름을 작성할 수 있는 인풋창이 있는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    value: { control: 'text' },
    selectedOption: { control: 'text' },
    onChangeInputHandler: { action: '체인지!' },
    onChangeRadioHandler: { action: '체인지!' },
  },
};

const Template = args => <TeamName {...args} />;

export const ExampleTeamName = Template.bind({});

ExampleTeamName.argTypes = {
  value: 'Example',
};
