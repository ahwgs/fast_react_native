/**
 * 用户信息接口
 */
export interface UserTypes {
  name: string;
  img: string;
  phone: string;
}

/**
 * 用户model
 */
export interface IUserState {
  isLogin: boolean;
  token: string;
  notices: number;
  currentUser: UserTypes;
}
