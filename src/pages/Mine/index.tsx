/*
 * 我的页面
 * @Author: ahwgs
 * @Date: 2020-05-05 20:31:12
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-08 00:06:26
 */

import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import NavigationBar from '@/components/NavigationBar';
import styles from './styles';
import NoticeIcon from './components/NoticeIcon';
import { useSelector } from 'react-redux';
import { screenUtils } from '@/utils/px2rem';
import UserCard from './components/UserCard';
import MarketingCard from './components/MarketingCard';
import MenuCard from './components/MenuCard';
import IconConstant from '@/constant/iconConstant';
import MenuList from './components/MenuList';
import PageFooter from '@/components/PageFooter';
const Mine = () => {
  const [opacity, setOpacity] = useState(0);

  const { noticeNum: noticeCount, isLogin, currentUser } = useSelector(
    ({ user, notices }) => ({
      noticeNum: notices.noticeNum,
      isLogin: user.isLogin,
      currentUser: user.currentUser,
    }),
  );

  const onScroll = (event: {nativeEvent: {contentOffset: {y: any}}}) => {
    const scroll = event.nativeEvent.contentOffset.y;
    setOpacity(scroll / (screenUtils.screenH / 10));
  };

  const orderMenus = [
    {
      title: '待支付',
      routerName: '',
      key: '1',
      icon: IconConstant.stayPayIcon,
    },
    {
      title: '待收货',
      routerName: '',
      key: '2',
      icon: IconConstant.stayReceiptIcon,
    },
    {
      title: '待评价',
      routerName: '',
      key: '3',
      icon: IconConstant.stayCommentIcon,
    },
    {
      title: '售后/退款',
      routerName: '',
      key: '4',
      icon: IconConstant.customerIcon,
    },
  ];

  return (
    <View style={styles.wrapper}>
      <NavigationBar
        title="我的"
        leading={null}
        navStyle={{ backgroundColor: '#FFFFFF', opacity: opacity, ...styles.nav }}
      />
      <View style={styles.notice}>
        <NoticeIcon noticeCount={noticeCount} isLogin={isLogin} />
      </View>
      <ScrollView onScroll={onScroll}>
        <View style={styles.pl}>
          <UserCard isLogin={isLogin} userInfo={currentUser} />
          <MarketingCard />
          <MenuCard
            title="我的订单"
            linkTitle="查看全部订单"
            linkPath="Orders"
            menus={orderMenus}
          />
          <MenuList />
          <PageFooter />
        </View>
      </ScrollView>
    </View>
  );
};

export default Mine;
