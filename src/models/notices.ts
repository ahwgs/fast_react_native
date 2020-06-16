/*
 * 消息
 * @Author: ahwgs
 * @Date: 2020-05-12 21:31:55
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-12 21:32:29
 */

import { INoticesState } from '@/types/notices';
import { fetchNoticeListService } from '@/services/api_notices';

const noticesState: INoticesState = {
  notices: null,
  noticeNum: 0,
};

export default {
  namespace: 'notices',
  state: noticesState,
  effects: {
    /**
     * 获取消息中心列表数据
     * @param param0
     * @param param1
     */
    *fetchNoticeList({}, { call, put }) {
      const res = yield call(fetchNoticeListService);
      let count = 0;
      Object.keys(res).forEach(v => {
        count += res[v].count;
      });
      yield put({
        type: 'save',
        payload: {
          notices: res,
          noticeNum: count,
        },
      });
    },
  },
  reducers: {
    save(state: any, action: {payload: any}) {
      return { ...state, ...action.payload };
    },
  },
};
