import AsyncStorage from '@react-native-community/async-storage';

const TOKEN_CONSTANT = 'dingdong_user_token';

/**
 * 获取token
 */
export const getToken = () => AsyncStorage.getItem(TOKEN_CONSTANT);

/**
 * 设置token
 * @param value token
 */
export const setToken = (value: string) => {
  AsyncStorage.setItem(TOKEN_CONSTANT, value);
};

/**
 * 清除本地存储数据
 */
export const clearStorage = () => {
  AsyncStorage.clear();
};
