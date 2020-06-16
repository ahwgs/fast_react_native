/*
 * app
 * @Author: ahwgs
 * @Date: 2020-05-12 21:31:55
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-12 21:32:21
 */

export default {
  namespace: 'app',
  state: {},
  effects: {
    /**
     * 初始app 获取必要数据 / 或登录后触发
     */
    *requestInitData(action, { put }) {
      yield put({ type: 'user/fetchUserInfo' }); // 用户信息
      yield put({ type: 'notices/fetchNoticeList' }); // 消息列表
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
