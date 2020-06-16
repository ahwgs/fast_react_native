/*
 * @Author: ahwgs
 * @Date: 2020-04-26 23:06:32
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-07 20:44:36
 */

import request from '@/utils/request';

/**
 * 获取消息中心列表数据
 */
export const fetchNoticeListService = () => {
  return request.get('/notices/list');
};
