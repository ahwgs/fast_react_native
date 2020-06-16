/*
 * 消息中心
 * @Author: ahwgs
 * @Date: 2020-05-06 23:25:14
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-07 21:53:44
 */

import React, { useMemo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import IconConstant from '@/constant/iconConstant';
import styles from './styles';
import { formatNum } from '@/utils/common';
import { useMount } from '@/hooks';
import { useDispatch, useSelector } from 'react-redux';
import CustomScrollView from '@/components/CustomScrollView';
const NoticeCenter = () => {
  const dispatch = useDispatch();
  const { notices, loading } = useSelector(({ notices, loading }) => ({
    notices: notices.notices,
    loading: loading.effects['notices/fetchNoticeList'] || false,
  }));
  const fetchList = () => {
    dispatch({
      type: 'notices/fetchNoticeList',
    });
  };

  useMount(() => {
    fetchList();
  });

  const config = [
    {
      type: 'activity',
      count: 0,
      icon: IconConstant.msgActivity,
      title: '活动福利',
      desc: '',
    },
    {
      type: 'orders',
      count: 0,
      icon: IconConstant.msgOrderIcon,
      title: '订单消息',
      desc: '',
    },
    {
      type: 'remind',
      count: 0,
      icon: IconConstant.msgRemindIcon,
      title: '提醒消息',
      desc: '',
    },
    {
      type: 'service',
      count: 0,
      icon: IconConstant.msgServiceIcon,
      title: '客服消息',
      desc: '',
    },
    {
      type: 'important',
      count: 0,
      icon: IconConstant.msgImportant,
      title: '重要通知',
      desc: '',
    },
  ];

  const noticeList = useMemo(() => {
    if (!notices) {
      return config;
    }
    let res = [];
    Object.keys(notices).forEach(key => {
      config.forEach(con => {
        if (con.type === key) {
          res.push({
            ...con,
            ...notices[key],
            desc: notices[key].msg,
          });
        }
      });
    });
    return res;
  }, [notices, config]);

  return (
    <View style={styles.container}>
      <CustomScrollView
        style={styles.list}
        loading={loading}
        onRefresh={fetchList}>
        {noticeList &&
          noticeList.map(con => (
            <TouchableOpacity
              key={con.type}
              style={[styles.rowS, styles.listItem]}>
              <View style={[styles.row, styles.left]}>
                <Image source={con.icon} style={styles.leftIcon} />
                <View style={styles.content}>
                  <Text style={styles.title}>{con.title}</Text>
                  <Text numberOfLines={1} style={styles.desc}>
                    {con.desc ? con.desc : '暂无消息'}
                  </Text>
                </View>
              </View>
              <View style={[styles.row, styles.right]}>
                {!!con.count && (
                  <View style={[styles.rightCountV]}>
                    <Text style={styles.countText}>{formatNum(con.count)}</Text>
                  </View>
                )}
                <Image
                  style={styles.rightIcon}
                  source={IconConstant.rightArrowIcon}
                />
              </View>
            </TouchableOpacity>
          ))}
      </CustomScrollView>
    </View>
  );
};

export default NoticeCenter;
