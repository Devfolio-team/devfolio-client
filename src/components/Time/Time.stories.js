import { Time } from 'components';

export default {
  title: 'Component/Time',
  component: Time,
  parameters: {
    docs: {
      description: {
        component:
          '**Time** 시간에 관련된 내용을 쓸때 스타일을 적용하여 사용할 수 있는 시멘틱한 스타일드 컴포넌트 입니다.',
      },
    },
  },
  argTypes: {},
};

const Template = args => <Time {...args} />;

export const ExampleTime = Template.bind({});

ExampleTime.args = {
  dateTime: '2021-04-19T06:40:56.455Z',
  fontSize: 1.6,
  color: '#212121',
  padding: '0',
  margin: '0',
  children: '2021년 04월 19일',
};
