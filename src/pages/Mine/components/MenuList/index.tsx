import React from 'react';
import MenuCard from '../MenuCard';
import IconConstant from '@/constant/iconConstant';

export default () => {
  const menus = [
    {
      title: '绿卡会员',
      routerName: '',
      key: '1',
      icon: IconConstant.myVipIcon,
    },
    {
      title: '收货地址',
      routerName: '',
      key: '2',
      icon: IconConstant.myAddressIcon,
    },
    {
      title: '邀请有礼',
      routerName: '',
      key: '3',
      tipText: '得30元红包',
      icon: IconConstant.myGiftIcon,
    },
    {
      title: '联系客服',
      routerName: '',
      key: '4',
      icon: IconConstant.myPhoneIcon,
    },
    {
      title: '礼品卡',
      routerName: '',
      key: '5',
      icon: IconConstant.myGitIcon,
    },
    {
      title: '扫一扫',
      routerName: '',
      key: '6',
      icon: IconConstant.myScanIcon,
    },
    {
      title: '意见反馈',
      routerName: '',
      key: '7',
      icon: IconConstant.mySuggestIcon,
    },
    {
      title: '设置',
      routerName: '',
      key: '8',
      icon: IconConstant.mySettingIcon,
    },
    {
      title: '企业采购',
      routerName: '',
      key: '9',
      icon: IconConstant.myCompanyIcon,
    },
  ];

  return <MenuCard title="常用功能" menus={menus} />;
};
