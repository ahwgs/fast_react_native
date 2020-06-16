import React from 'react';
import styles from './styles';
import { View, Text, Image } from 'react-native';
import get from 'lodash/get';
import IconConstant from '@/constant/iconConstant';
import AuthLoginButton from '@/components/AuthLoginButton';
import { getShieldPhone } from '@/utils/common';
import { SexEnum } from '@/constant/commonConstant';
interface IProps {
  isLogin: boolean;
  userInfo: object;
}

export default ({ isLogin, userInfo }: IProps) => {
  const text = isLogin ? get(userInfo, 'name') : '立即登录';
  const img = isLogin ? { uri: get(userInfo, 'img') } : IconConstant.defaultHead;
  const phone = get(userInfo, 'phone');
  const sex = get(userInfo, 'sex');
  const sexIcon = {
    [SexEnum.man]: IconConstant.sexManIcon,
    [SexEnum.woman]: IconConstant.sexWomanManIcon,
  };

  return (
    <View style={styles.container}>
      {!isLogin && (
        <AuthLoginButton routeName="UserProfile" style={[styles.left]}>
          <Image source={img} style={styles.icon} />
          <Text style={styles.name}>{text}</Text>
        </AuthLoginButton>
      )}
      {isLogin && (
        <AuthLoginButton routeName="UserProfile" style={[styles.left]}>
          <View style={styles.headV}>
            <Image source={img} style={styles.icon} />
            {!!sex && (
              <View style={styles.sexV}>
                <Image style={styles.sexIcon} source={sexIcon[sex]} />
              </View>
            )}
          </View>
          <View>
            <Text style={styles.name}>{text}</Text>
            <View style={[styles.row, styles.phoneV]}>
              <Image
                style={styles.phoneIcon}
                source={IconConstant.myGrayPhoneIcon}
              />
              <Text style={styles.phone}>{getShieldPhone(phone)}</Text>
            </View>
          </View>
        </AuthLoginButton>
      )}

      <AuthLoginButton routeName="UserProfile" style={styles.right}>
        <Image style={styles.smIcon} source={IconConstant.signUpIcon} />
        <Text style={styles.tip}>签到领积分</Text>
      </AuthLoginButton>
    </View>
  );
};
