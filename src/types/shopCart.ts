/**
 * 购物车相关
 */

import { GoodsStatus } from '@/constant/commonConstant';

/**
 * 优惠券
 */
export interface CouponType {
  description: string;
  expiredTime: string;
  id: string | number;
  maxPrice: number;
  price: number;
  type: number;
  title: string;
}

type goodsStatusType = GoodsStatus;

/**
 * 购物车商品
 */
export interface CartItemType {
  id: number;
  goodsImg: string;
  price: number;
  title: string;
  count: number;
  status: goodsStatusType;
}

/**
 * 优惠券列表
 */
export interface IShopCartState {
  couponList: Array<CouponType>;
  cartList: Array<CartItemType>;
  selectList: Array<CartItemType>;
}
