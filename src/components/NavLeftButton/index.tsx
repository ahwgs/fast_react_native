import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import theme from '@/utils/theme';
import IconConstant from '@/constant/iconConstant';
import { px2rem } from '@/utils/px2rem';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  title: {
    color: theme.primary,
    fontSize: theme.fontSizeMd,
  },
  icon: {
    transform: [{ rotate: '180deg' }],
    width: px2rem(8),
    height: px2rem(15),
  },
  button: {
    width: px2rem(60),
    height: '100%',
    paddingLeft: theme.basePadding,
    justifyContent: 'center',
  },
});

interface IProps {
  leftTitle?: string;
  leftTitleStyle?: any;
  leftIconStyle?: any;
  onPress?: any;
  style?: any;
}

const NavLeftButton = (props: IProps) => {
  const { leftTitle, leftTitleStyle, leftIconStyle, onPress, style } = props;
  const navigation = useNavigation();
  // 返回
  const customPress = () => {
    navigation && navigation.goBack();
  };

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress ? onPress : customPress}>
      {!!leftTitle && (
        <Text style={[styles.title, leftTitleStyle]}>{leftTitle}</Text>
      )}
      {!leftTitle && (
        <Image
          style={[styles.icon, leftIconStyle]}
          source={IconConstant.rightArrowIcon}
        />
      )}
    </TouchableOpacity>
  );
};

export default NavLeftButton;
