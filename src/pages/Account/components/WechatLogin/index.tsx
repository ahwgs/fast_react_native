import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styleUtil from '@/utils/styles';
import theme from '@/utils/theme';
import { px2rem } from '@/utils/px2rem';
import IconConstant from '@/constant/iconConstant';

const styles = StyleSheet.create({
  warp: {
    ...styleUtil.columnCenter,
    position: 'absolute',
    bottom: px2rem(60),
    left: 0,
    right: 0,
  },
  icon: {
    width: px2rem(40),
    height: px2rem(40),
    marginBottom: px2rem(8),
  },
  text: {
    fontSize: theme.fontSizeXs,
    color: theme.grayColor,
  },
  line: {
    width: px2rem(80),
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.grayColor,
  },
  row: {
    ...styleUtil.rowCenter,
    alignItems: 'center',
  },
  mr: {
    marginHorizontal: px2rem(8),
  },
  tip: {
    marginBottom: px2rem(10),
  },
});

interface IProps {
  onPress: any;
}

const WechatLogin = ({ onPress }: IProps) => {
  return (
    <View style={styles.warp}>
      <View style={[styles.row, styles.tip]}>
        <View style={styles.line} />
        <Text style={[styles.text, styles.mr]}>第三方账号登录</Text>
        <View style={styles.line} />
      </View>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.icon} source={IconConstant.wechatIcon} />
      </TouchableOpacity>
      <Text style={styles.text}>微信登录</Text>
    </View>
  );
};

export default WechatLogin;
