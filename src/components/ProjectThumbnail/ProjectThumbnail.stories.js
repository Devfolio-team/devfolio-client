import ProjectThumbnail from './ProjectThumbnail';

export default {
  title: 'Component/ProjectThumbnail',
  component: ProjectThumbnail,
  parameters: {
    docs: {
      description: {
        component:
          '**ProjectThumbnail** drap and drop으로 이미지를 업로트할 수 있는 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    value: { control: 'text' },
    onChangeHandler: { action: '체인지!' },
  },
};

const Template = args => <ProjectThumbnail {...args} />;

export const ExampleProjectThumbnail = Template.bind({});
