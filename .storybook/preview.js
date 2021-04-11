// 한국어 설정
import ko from 'axe-core/locales/ko.json';
import { themes } from '@storybook/theming';

export const parameters = {
  layout: 'centered',
  a11y: { config: { locale: ko } },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  docs: {
    theme: themes.light,
  },
};

export const globalTypes = {
  locale: {
    name: '언어 설정',
    description: '사용할 언어를 선택합니다.',
    defaultValue: 'kr',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
        { value: 'es', right: '🇪🇸', title: 'Español' },
        { value: 'zh', right: '🇨🇳', title: '中文' },
        { value: 'kr', right: '🇰🇷', title: '한국어' },
      ],
    },
  },
};
