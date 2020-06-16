/*
 * 优惠券头部组件
 * @Author: ahwgs
 * @Date: 2020-05-12 21:50:21
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-15 01:49:25
 */

import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import styleUtil from '@/utils/styles';
import { px2rem } from '@/utils/px2rem';
import IconConstant from '@/constant/iconConstant';
import theme from '@/utils/theme';
import { CouponType } from '@/types/shopCart';
import CustomPopUp from '@/components/CustomPopUp';
import useToggle from '@/hooks/useToggle';
import CouponList from '../CouponList';

const styles = StyleSheet.create({
  row: {
    ...styleUtil.rowSpaceBetween,
    alignItems: 'center',
  },
  header: {
    height: px2rem(38),
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: theme.basePadding,
    zIndex: 100,
  },
  rightIcon: {
    width: px2rem(5),
    height: px2rem(10),
  },
  couponCard: {
    alignItems: 'center',
    paddingVertical: px2rem(3),
    backgroundColor: 'rgb(237,237,237)',
    borderRadius: px2rem(5),
    paddingHorizontal: px2rem(8),
    marginRight: px2rem(5),
  },
  icon: {
    width: px2rem(13),
    height: px2rem(9),
    marginRight: px2rem(2),
  },
  list: {
    marginLeft: px2rem(12),
  },
  text: {
    color: theme.blackColor,
    fontSize: theme.fontSizeXss,
  },
  title: {
    fontSize: theme.fontSizeSm,
  },
});

const CouponRow = (props: {list: Array<CouponType>}) => {
  const { list } = props;
  const showList = list.slice(0, 4);

  const { state, toggle } = useToggle();

  const onCloseModal = () => {
    toggle(false);
  };

  const showModal = () => {
    toggle(true);
  };

  return (
    <React.Fragment>
      <TouchableOpacity style={[styles.row, styles.header]} onPress={showModal}>
        <View style={[styles.row]}>
          <Text style={styles.title}>领劵</Text>
          <View style={[styles.row, styles.list]}>
            {showList &&
              showList.map((card: CouponType) => (
                <View key={card.id} style={[styles.row, styles.couponCard]}>
                  <Image
                    style={styles.icon}
                    source={IconConstant.vipExpireIcon}
                  />
                  <Text style={styles.text}>
                    满{card.maxPrice}减{card.price}
                  </Text>
                </View>
              ))}
          </View>
        </View>
        <Image source={IconConstant.rightArrowIcon} style={styles.rightIcon} />
      </TouchableOpacity>
      <CustomPopUp
        title="领取优惠卷"
        visible={state}
        onClose={onCloseModal}
        children={<CouponList list={list} />}
      />
    </React.Fragment>
  );
};

export default CouponRow;
