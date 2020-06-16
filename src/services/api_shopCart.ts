/*
 * @Author: ahwgs
 * @Date: 2020-05-12 21:42:21
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-13 22:58:05
 */

import request from '@/utils/request';

/**
 * 购物车-获取优惠券列表
 */
export const fetchCouponListService = () => {
  return request.get('/shopCart/coupons');
};

/**
 * 购物车-获取购物车列表
 */
export const fetchCartListService = () => {
  return request.get('/shopCart/list');
};
