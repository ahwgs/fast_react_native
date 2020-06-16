/*
 * @Author: ahwgs
 * @Date: 2020-04-04 23:45:48
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-04-09 21:43:47
 */

import React from 'react';
import { Text } from 'react-native';
import { px2rem } from '@/utils/px2rem';
import theme from '@/utils/theme';

// 重置所有Text
// @ts-ignore
const oldRender = Text.render;
Text.render = function(...args) {
  const origin = oldRender.call(this, ...args);
  return React.cloneElement(origin, {
    allowFontScaling: false,
    style: [
      {
        letterSpacing: 0.1,
        fontSize: px2rem(14),
        color: theme.blackColor,
      },
      origin.props.style,
    ],
  });
};

// 关闭警告
console.disableYellowBox = true;
