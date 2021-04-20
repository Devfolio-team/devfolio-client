import { GithubRepoInput } from 'components';

export default {
  title: 'Component/GithubRepoInput',
  component: GithubRepoInput,
  parameters: {
    docs: {
      description: {
        component: '**GithubRepoInput** 깃허브 주소를 작성할 수 있는 인풋창이 있는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    value: { control: 'text' },
    onChange: { action: '체인지!' },
    beforeTranslate: { control: 'number' },
    afterTranslate: { control: 'number' },
    beforeMargin: { control: 'number' },
    afterMargin: { control: 'number' },
  },
};

const Template = args => <GithubRepoInput {...args} />;

export const ExampleGithubRepoInput = Template.bind({});

ExampleGithubRepoInput.argTypes = {
  value: 'Example',
  beforeTranslate: 4.5,
  afterTranslate: 1,
  beforeMargin: 8,
  afterMargin: 3,
};
