import PublicStatus from './PublicStatus';

export default {
  title: 'Component/PublicStatus',
  component: PublicStatus,
  parameters: {
    docs: {
      description: {
        component: '**PublicStatus** 프로젝트 공개여부를 정할 수 있는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    selectedOption: { control: 'text' },
    onChangeRadioHandler: { action: '체인지!' },
  },
};

const Template = args => <PublicStatus {...args} />;

export const ExamplePublicStatus = Template.bind({});
