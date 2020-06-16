/*
 * 环境配置
 * @Author: ahwgs
 * @Date: 2020-04-26 22:59:21
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-07 20:57:34
 */

import EnvJs from './env';

const { env: platform } = EnvJs;

const _CommonConfig = {
  pro: {
    BASE_URL: '',
    API_KEY: '',
    H5_HEAD_URL: '',
    OSS_URL: '',
  },
  test: {
    BASE_URL: '',
    API_KEY: '',
    H5_HEAD_URL: '',
    OSS_URL: '',
  },
  dev: {
    BASE_URL: '',
    API_KEY: '',
    H5_HEAD_URL: '',
    OSS_URL: '',
  },
  mock: {
    BASE_URL:
      'https://www.fastmock.site/mock/3267adc015e0ab7c2bbfa219bd89ccb1/v1',
    API_KEY: '',
    H5_HEAD_URL: '',
    OSS_URL: '',
  },
};

function getCommonConfig() {
  return platform ? _CommonConfig[platform] : _CommonConfig.dev;
}

const CommonConfig = getCommonConfig();

export default CommonConfig;
