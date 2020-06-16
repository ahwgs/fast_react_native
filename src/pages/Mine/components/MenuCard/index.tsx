import React from 'react';
import { View, Text, Image } from 'react-native';
import AuthLoginButton from '@/components/AuthLoginButton';
import IconConstant from '@/constant/iconConstant';
import { MenuCardListItemTypes } from './types';
import styles from './styles';
interface IProps {
  title: string;
  linkTitle?: string;
  linkPath?: string;
  menus: Array<MenuCardListItemTypes>;
}

const MenuCard = (props: IProps) => {
  const { title, linkTitle, linkPath, menus } = props;
  return (
    <View style={styles.container}>
      <AuthLoginButton
        style={styles.titleRow}
        routeName={linkPath ? linkPath : ''}>
        <Text style={styles.cardTitle}>{title}</Text>
        {linkTitle && (
          <View style={styles.row}>
            <Text style={styles.titleTip}>{linkTitle}</Text>
            <Image
              style={styles.titleIcon}
              source={IconConstant.rightArrowIcon}
            />
          </View>
        )}
      </AuthLoginButton>
      <View style={styles.menus}>
        {menus &&
          menus.map(menu => (
            <AuthLoginButton
              style={styles.menu}
              routeName={menu.routerName}
              key={menu.key}>
              <View style={styles.iconView}>
                <Image style={styles.menuIcon} source={menu.icon} />
              </View>
              <Text style={[styles.text, styles.title]}>{menu.title}</Text>
              <Text style={[styles.text, styles.tip]}>{menu.tipText}</Text>
            </AuthLoginButton>
          ))}
      </View>
    </View>
  );
};

export default MenuCard;
