/*
 * 路由表
 * @Author: ahwgs
 * @Date: 2020-04-09 20:44:08
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-13 23:47:19
 */

import Login from '@/pages/Account/Login';
import HomeScreen from '@/pages/Home';
import ClassifyScreen from '@/pages/Classify';
import EatScreen from '@/pages/Eat';
import ShopCart from '@/pages/ShopCart';
import Mine from '@/pages/Mine';
import Bootstrap from '@/pages/Bootstrap';
import NoticeCenter from '@/pages/Mine/NoticeCenter';
import UserProfile from '@/pages/Mine/UserProfile';
import Guide from '@/pages/Guide';
import OpenOrder from '@/pages/Orders/OpenOrder';

// 路由
export default [
  { name: 'Bootstrap', title: '启动', screen: Bootstrap, header: 'none' },
  { name: 'Guide', title: '引导页', screen: Guide, header: 'none' },
  { name: 'Login', title: '登录/注册', screen: Login },
  {
    name: 'NoticeCenter',
    title: '消息中心',
    screen: NoticeCenter,
    isLogin: true,
  },
  {
    name: 'UserProfile',
    title: '个人资料',
    screen: UserProfile,
    isLogin: true,
  },
  {
    name: 'OpenOrder',
    title: '填写订单',
    screen: OpenOrder,
    isLogin: true,
  },
];

export const tabConfig = [
  { name: 'Home', title: '首页', screen: HomeScreen },
  { name: 'Classify', title: '分类', screen: ClassifyScreen },
  { name: 'Eat', title: '吃什么', screen: EatScreen },
  { name: 'ShopCart', title: '购物车', screen: ShopCart, isLogin: true },
  { name: 'Mine', title: '我的', screen: Mine },
];
