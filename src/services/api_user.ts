/*
 * @Author: ahwgs
 * @Date: 2020-04-26 23:06:32
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-07 21:56:53
 */

import request from '@/utils/request';

export const ajaxService = () => {
  Promise.resolve('1213');
};

/**
 * 用户-登录接口
 * @param phone 手机号
 * @param vcode 验证码
 */
export const fetchUserLoginService = body => {
  return request.post('/account/login', body);
};

/**
 * 用户-获取短信验证码
 * @param phone 手机号
 */
export const fetchPhoneCodeService = params => {
  return request.get('/account/getVcode', { params });
};

/**
 * 用户-获取个人信息
 */
export const fetchUserInfoService = () => {
  return request.get('/account/info');
};
