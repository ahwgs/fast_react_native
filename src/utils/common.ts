/*
 * 公共工具文件
 * @Author: ahwgs
 * @Date: 2020-04-04 23:33:10
 * @Last Modified by: ahwgs
 * @Last Modified time: 2020-05-07 22:44:52
 */
import _ from 'lodash';
import { Toast } from '@ant-design/react-native';
/**
 * 校验表单吐司
 * @param {*} err
 */
export const errorToast = err => {
  const errors = [];
  _.each(err, item => errors.push(...item.errors));
  const [firstError] = errors;
  const { message } = firstError;
  Toast.info(message);
};

/**
 * 格式化数字
 * @param num 当前值
 * @param max 最大值
 */
export const formatNum = (num: number, max: number = 99) => {
  if (!num) {
    return 0;
  }
  if (num > max) {
    return `${max}+`;
  }
  return num;
};

/**
 * 手机号脱敏
 * @param phone
 */
export const getShieldPhone = (phone: string) =>
  phone ? `${phone.substring(0, 3)}****${phone.substring(7, 11)}` : '';
