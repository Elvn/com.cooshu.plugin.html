import div from './div/config';
import a from './a/config';

import zh from './locales/zh-CN';
import en from './locales/en-US';

export const config = {
  name: '@html library',
  version: '0.0.1',

  pluginConfigs: [
    {
      name: '导航',
      children: {
        div,a,
      },
    },
  ],
  locale: {
    zh: zh,
    en: en,
  },
};
