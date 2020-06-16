import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { getToken } from '@/utils/storage';
import SplashScreen from 'react-native-splash-screen';
import { navigateReset } from '@/utils/navigation';
import theme from '@/utils/theme';
import { useDispatch } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

const Bootstrap = () => {
  const dispatch = useDispatch();

  async function bootstrapAsync() {
    // 启动处理
    try {
      let isLogin: boolean;
      const token = await getToken();
      isLogin = !!token;

      console.log('token', token);

      // 未登录
      if (!isLogin) {
        navigateReset('Login');
        setTimeout(SplashScreen.hide);
        return;
      }
      if (isLogin) {
        // request common data
        await dispatch({ type: 'app/requestInitData' });
        navigateReset('Home');
        setTimeout(SplashScreen.hide);
      }
    } catch (error) {
      console.warn('bootstrapAsync error', error);
    }
  }

  useEffect(() => {
    bootstrapAsync();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={30} color={theme.primary} />
    </View>
  );
};

export default Bootstrap;
