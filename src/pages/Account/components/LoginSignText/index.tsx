import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styleUtil from '@/utils/styles';
import theme from '@/utils/theme';
import { px2rem } from '@/utils/px2rem';

const styles = StyleSheet.create({
  row: {
    ...styleUtil.row,
    ...styleUtil.rowCenter,
    position: 'absolute',
    bottom: px2rem(30),
    left: 0,
    right: 0,
  },
  primary: {
    color: theme.primary,
  },
  text: {
    fontSize: theme.fontSizeXs,
    color: theme.grayColor,
  },
});

const LoginSignText = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>登录即代表你同意叮咚不买菜</Text>
      <TouchableOpacity>
        <Text style={[styles.text, styles.primary]}>《服务协议》</Text>
      </TouchableOpacity>
      <Text style={styles.text}>和</Text>
      <TouchableOpacity>
        <Text style={[styles.text, styles.primary]}>《隐私政策》</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginSignText;
