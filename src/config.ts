import { ILibraryConfig } from 'kusu-plugin-sdk';
import div from './div/config';
import a from './a/config';
import button from './button/config';
import audio from './audio/config';
import img from './img/config';
import input from './input/config';
import select from './audio/config';

import zh from './locales/zh-CN';
import en from './locales/en-US';

export const config: ILibraryConfig = {
  name: '@html library',
  libraryId: 'com.cooshu.html',
  version: '0.0.1',
  pluginConfigs: [
    {
      name: '导航',
      children: {
        div, a, button, audio, img, input, select,
      },
    },
  ],
  locale: {
    zh: zh,
    en: en,
  },
};
