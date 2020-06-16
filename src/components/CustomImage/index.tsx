import FastImage, { FastImageProperties } from 'react-native-fast-image';
import React from 'react';
import styles from './styles';

interface IProps extends FastImageProperties {
  url?: string;
  source: any;
  resizeMode?: FastImage.ResizeMode;
}

const CustomImage = (props: IProps) => {
  const { url, source, restProps, defaultSource } = props;
  return url || source ? (
    <FastImage
      source={source || { uri: url }}
      defaultSource={defaultSource}
      resizeMode="cover"
      {...restProps}
    />
  ) : (
    <FastImage source={defaultSource} resizeMode="cover" {...restProps} />
  );
};

export default CustomImage;
