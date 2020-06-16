/*
 * 优惠券列表
 * @Author: ahwgs
 * @Date: 2020-05-12 23:13:47
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-12 23:59:42
 */

import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { CouponType } from '@/types/shopCart';
import { screenUtils, px2rem } from '@/utils/px2rem';
import styleUtil from '@/utils/styles';
import theme from '@/utils/theme';
import IconConstant from '@/constant/iconConstant';

const styles = StyleSheet.create({
  list: {
    width: screenUtils.screenW,
    paddingHorizontal: theme.basePadding,
    flex: 1,
    marginTop: px2rem(4),
  },
  container: {
    width: screenUtils.screenW,
    height: screenUtils.screenH * (2 / 3),
  },
  tip: {
    paddingHorizontal: theme.basePadding,
    height: px2rem(40),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  color: {
    color: theme.primary,
  },
  card: {
    height: px2rem(105),
    borderRadius: px2rem(10),
    marginBottom: px2rem(12),
    borderColor: 'rgb(252,233,164)',
    borderWidth: px2rem(1),
    flexDirection: 'row',
  },
  left: {
    backgroundColor: 'rgb(252,233,164)',
    height: '100%',
    width: px2rem(102),
    borderTopLeftRadius: px2rem(10),
    borderBottomLeftRadius: px2rem(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    // backgroundColor: 'rgb(245,245,245)',
    height: '100%',
    flex: 1,
    borderTopRightRadius: px2rem(10),
    borderBottomRightRadius: px2rem(10),
    alignItems: 'center',
    ...styleUtil.rowSpaceBetween,
    paddingHorizontal: px2rem(12),
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
    marginLeft: px2rem(5),
  },
  titleIcon: {
    width: px2rem(20),
    height: px2rem(18),
  },
  desc: {
    color: theme.grayColor,
    fontSize: theme.fontSizeXs,
  },
  titleV: {
    marginBottom: px2rem(5),
  },
  row: {
    flexDirection: 'row',
  },
  price: {
    color: theme.blackColor,
  },
  flexStart: {
    alignItems: 'flex-end',
  },
  priceIcon: {
    fontSize: theme.fontSizeXs,
    marginBottom: px2rem(6),
  },
  max: {
    fontWeight: '800',
    fontSize: px2rem(33),
  },
  priceTip: {
    fontWeight: '400',
    fontSize: theme.fontSizeXs,
  },
  button: {
    width: px2rem(70),
    height: px2rem(28),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(252,233,164)',
    color: theme.blackColor,
    borderRadius: px2rem(13),
  },
  buttonTxt: {
    fontSize: theme.fontSizeXs,
    color: theme.blackColor,
  },
});
const CouponList = (props: {list: Array<CouponType>}) => {
  const { list } = props;
  return (
    <View style={styles.container}>
      <View style={[styleUtil.row, styles.tip]}>
        <Text>以下优惠券限绿卡会员领取</Text>
        <TouchableOpacity>
          <Text style={styles.color}>开通绿卡</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        style={styles.list}
        renderItem={({ item: card }) => (
          <View key={card.id} style={styles.card}>
            <View style={styles.left}>
              <View style={[styles.row, styles.flexStart]}>
                <Text style={[styles.price, styles.priceIcon]}>￥</Text>
                <Text style={[styles.price, styles.max]}>{card.price}</Text>
              </View>
              <Text style={[styles.price, styles.priceTip]}>
                满{card.maxPrice}元使用
              </Text>
            </View>
            <View style={styles.right}>
              <View>
                <View style={[styles.row, styles.titleV]}>
                  <Image
                    style={styles.titleIcon}
                    source={IconConstant.vipActiveIcon}
                  />
                  <Text style={styles.title}>{card.title}</Text>
                </View>
                <Text style={styles.desc}>{card.description}</Text>
                <Text style={styles.desc}>{card.expiredTime}</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTxt}>立即领取</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CouponList;
