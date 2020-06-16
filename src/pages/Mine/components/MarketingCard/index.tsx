import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import AuthLoginButton from '@/components/AuthLoginButton';
import styles from './styles';
import IconConstant from '@/constant/iconConstant';

const MarketingCard = props => {
  const { isLogin, countConfig, vipInfo } = props;
  const menuComfig = [
    {
      count: isLogin ? 0 : 0,
      title: '优惠券',
      routerName: '',
    },
    {
      count: isLogin ? 0 : 0,
      title: '积分',
      routerName: '',
    },
    {
      count: isLogin ? 0 : 0,
      title: '余额（元）',
      tipText: '充998送12',
      routerName: '',
    },
  ];

  return (
    <View style={styles.container}>
      <AuthLoginButton style={styles.vipContainer} routeName="">
        <View style={[styles.left]}>
          <Image style={styles.vipIcon} source={IconConstant.vipExpireIcon} />
          <Text style={styles.vipText}>开通绿卡会员，平均可省806元/年</Text>
        </View>
        <ImageBackground
          resizeMode="center"
          style={styles.right}
          source={IconConstant.buttonBgIcon}>
          <Text style={[styles.text, styles.opentext]}>立即开通</Text>
        </ImageBackground>
      </AuthLoginButton>
      <View style={[styles.card]}>
        {menuComfig.map((menu, index) => (
          <AuthLoginButton
            style={styles.menu}
            routeName={menu.routerName}
            key={index.toString()}>
            <Text style={[styles.text, styles.count]}>{menu.count}</Text>
            <Text style={[styles.text, styles.title]}>{menu.title}</Text>
            {menu.tipText && (
              <Text style={[styles.text, styles.tip]}>{menu.tipText}</Text>
            )}
          </AuthLoginButton>
        ))}
      </View>
    </View>
  );
};

export default MarketingCard;
