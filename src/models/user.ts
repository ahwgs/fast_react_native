/*
 * 用户
 * @Author: ahwgs
 * @Date: 2020-05-12 21:31:55
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-12 21:32:38
 */

import {
  fetchUserLoginService,
  fetchPhoneCodeService,
  fetchUserInfoService,
} from '@/services/api_user';
import { Toast } from '@ant-design/react-native';
import { navigateReplace } from '@/utils/navigation';
import { IUserState } from '@/types/user';
import { setToken } from '@/utils/storage';

const userState: IUserState = {
  isLogin: false,
  token: '',
  notices: 1,
  currentUser: {
    name: '',
    img: '',
    phone: '',
  },
};

export default {
  namespace: 'user',
  state: userState,
  effects: {
    *add({}, { put, select }) {
      const c = yield select((state: {user: {count: any}}) => state.user.count);
      yield put({
        type: 'save',
        payload: {
          count: c + 1,
        },
      });
    },
    /**
     * 账户-获取个人信息
     */
    *fetchUserInfo({}, { call, put }) {
      const info = yield call(fetchUserInfoService);
      yield put({
        type: 'save',
        payload: {
          currentUser: info,
          isLogin: !!info,
        },
      });
    },
    /**
     * 账户-登录
     * @param phone
     * @param vcode
     */
    *fetchLogin({ payload, params }, { call, put }) {
      const { redirect } = params;
      const res = yield call(fetchUserLoginService, payload);
      const { token = '' } = res;
      if (token && redirect) {
        navigateReplace(redirect);
      }
      yield put({
        type: 'save',
        payload: {
          isLogin: true,
          token: token,
        },
      });
      setToken(token);
      return res;
    },
    /**
     * 账户-获取短信验证码
     * @param phone
     */
    *fetchPhoneCode({ payload }, { call }) {
      const res = yield call(fetchPhoneCodeService, payload);
      if (!res) {
        Toast.info('验证码获取失败');
      } else {
        Toast.info('验证码获取成功');
        return res;
      }
    },
  },
  reducers: {
    save(state: any, action: {payload: any}) {
      return { ...state, ...action.payload };
    },
  },
};
