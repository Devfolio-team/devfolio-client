import DeploymentStatus from './DeploymentStatus';

export default {
  title: 'Component/DeploymentStatus',
  component: DeploymentStatus,
  parameters: {
    docs: {
      description: {
        component:
          '**DeploymentStatus** 프로젝트 배포 여부를 체크하고 배포됬을시 배포된 사이트의 주소를 입력할 수 있는 컴포넌트입니다.',
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

const Template = args => <DeploymentStatus {...args} />;

export const ExampleDeplomentStatus = Template.bind({});

ExampleDeplomentStatus.argTypes = {
  value: 'Example',
};
