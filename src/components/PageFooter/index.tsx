import React from 'react';
import { View, Image } from 'react-native';
import IconConstant from '@/constant/iconConstant';

import styles from './styles';

interface IProps {
  style?: any;
}

const PageFooter = ({ style }: IProps) => {
  return (
    <View style={[styles.footer, style]}>
      <Image style={styles.icon} source={IconConstant.footerIcon} />
    </View>
  );
};

export default PageFooter;
