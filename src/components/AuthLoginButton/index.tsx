import React from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import routerConfig, { tabConfig } from '@/routes/routerConfig';
import { navigate } from '@/utils/navigation';

interface IProps extends TouchableOpacityProps {
  children: any;
  routeName: string;
  onPress?: any;
}

interface IRouter {
  isLogin?: boolean;
  name: string;
  title: string;
  screen: any;
}

const AuthLoginButton = (props: IProps) => {
  const { children, onPress, routeName } = props;
  const { isLogin } = useSelector((state: {user: any}) => state.user);
  const neesLoginList = [...tabConfig, ...routerConfig]
    .filter((r: IRouter) => r && r.isLogin)
    .map((r: IRouter) => r.name);

  const need =
    neesLoginList && neesLoginList.indexOf(routeName) >= 0 && !isLogin;

  const checkLogin = () => {
    if (need) {
      navigate('Login', { redirect: routeName });
    } else {
      if (onPress) {
        onPress();
        return;
      }
      navigate(routeName);
    }
  };

  return (
    <TouchableOpacity {...props} onPress={checkLogin}>
      {children}
    </TouchableOpacity>
  );
};

export default AuthLoginButton;
