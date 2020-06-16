import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import { screenUtils } from '@/utils/px2rem';
import IconConstant from '@/constant/iconConstant';
import { NavigationPropsType } from './PropsType';
const isWhite = (color = '') => {
  if (!color) {
    return false;
  }
  color = color.toLocaleLowerCase();
  if (
    color === 'white' ||
    color === '#fff' ||
    color === '#ffffff' ||
    color === 'rgba(255, 255, 255)'
  ) {
    return true;
  }
  return false;
};

export const statusBarHeight = screenUtils.statusBarHeight;

const NavigationBar = ({
  leading, // 左边组建, 为 null 则不显示
  leadingPress,
  trailing = null, // 右边组建， 如有onPress 放到 trailing 上
  navStyle = { backgroundColor: '#fff' }, // nav container Style
  title = '',
}: NavigationPropsType) => {
  const navigation = useNavigation();
  const containerStyle = {
    ...styles.nav,
    ...navStyle,
  };
  const tintColor = isWhite(containerStyle.backgroundColor) ? '#000' : '#fff'; // 文字颜色： 白色背景为黑色，其他背景色为白色

  const goback = () => {
    if (leadingPress) {
      leadingPress();
    } else {
      navigation.goBack();
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      if (isWhite(containerStyle.backgroundColor)) {
        StatusBar.setBarStyle('dark-content');
      } else {
        StatusBar.setBarStyle('light-content');
      }
    }, [containerStyle.backgroundColor]),
  );

  return (
    <View style={containerStyle}>
      <View style={styles.sideStyle}>
        {leading !== null && (
          <TouchableOpacity onPress={goback} style={styles.btnStyle}>
            {leading ? (
              leading
            ) : (
              <Image
                style={[styles.icon]}
                source={IconConstant.rightArrowIcon}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
      <Text style={[styles.titleStyle, { color: tintColor }]}>{title}</Text>
      <View style={[styles.sideStyle, { alignItems: 'flex-end' }]}>
        {trailing !== null && trailing}
      </View>
    </View>
  );
};

export default NavigationBar;
