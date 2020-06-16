/*
 * 购物车
 * @Author: ahwgs
 * @Date: 2020-05-12 21:31:55
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-15 01:30:07
 */
import { IShopCartState } from '@/types/shopCart';
import {
  fetchCouponListService,
  fetchCartListService,
} from '@/services/api_shopCart';

const shopcartState: IShopCartState = {
  couponList: [], // 优惠卷列表
  cartList: [], // 购物车列表
  selectList: [], // 购物车已选择的列表
};

export default {
  namespace: 'shopcart',
  state: {
    ...shopcartState,
  },
  effects: {
    /**
     * 获取优惠券列表
     */
    *fetchCouponList({ payload }, { call, put }) {
      const res = yield call(fetchCouponListService, payload);
      yield put({
        type: 'save',
        payload: {
          couponList: res,
        },
      });
    },

    /**
     * 购物车列表
     */
    *fetchCartList({ payload }, { call, put }) {
      const res = yield call(fetchCartListService, payload);
      yield put({
        type: 'save',
        payload: {
          cartList: res,
        },
      });
      console.log('fetchCartList', res);
      return res;
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
