import { GithubLink } from 'components';

export default {
  title: 'Component/GithubLink',
  component: GithubLink,
  parameters: {
    docs: {
      description: {
        component: '**GithubLink** 깃허브 주소를 작성할 수 있는 인풋창이 있는 컴포넌트입니다.',
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

const Template = args => <GithubLink {...args} />;

export const ExampleGithubLink = Template.bind({});

ExampleGithubLink.argTypes = {
  value: 'Example',
  beforeTranslate: 4.5,
  afterTranslate: 1,
  beforeMargin: 8,
  afterMargin: 3,
};
