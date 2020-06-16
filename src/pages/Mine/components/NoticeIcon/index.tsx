import React, { memo } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import AuthLoginButton from '@/components/AuthLoginButton';
import IconConstant from '@/constant/iconConstant';
import { px2rem } from '@/utils/px2rem';
import theme from '@/utils/theme';

const styles = StyleSheet.create({
  notice: {
    height: px2rem(24),
    width: px2rem(24),
  },
  noticeView: {
    position: 'absolute',
    width: px2rem(15),
    height: px2rem(15),
    borderRadius: px2rem(10),
    backgroundColor: 'red',
    top: px2rem(-4),
    left: px2rem(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: theme.fontSizeXss,
  },
  container: {
    paddingRight: theme.basePadding,
    position: 'relative',
  },
});

const NoticeIcon = ({ noticeCount, isLogin }) => {
  return (
    <AuthLoginButton routeName="NoticeCenter">
      <View style={styles.container}>
        <Image style={styles.notice} source={IconConstant.noticeIcon} />
        {isLogin && noticeCount > 0 && (
          <View style={styles.noticeView}>
            <Text style={styles.text}>{noticeCount}</Text>
          </View>
        )}
      </View>
    </AuthLoginButton>
  );
};

export default memo(NoticeIcon);
