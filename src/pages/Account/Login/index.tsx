import React, { useLayoutEffect, useState } from 'react';
import { View, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavLeftButton from '@/components/NavLeftButton';
import {
  WhiteSpace,
  WingBlank,
  InputItem,
  Button,
} from '@ant-design/react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import LoginSignText from '../components/LoginSignText';
import WechatLogin from '../components/WechatLogin';
import { createForm } from 'rc-form';
import { errorToast } from '@/utils/common';
import SmsButton from '@/components/SmsButton';
import { PHONE } from '@/utils/reg';

const Login = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [params, setParams] = useState(null);
  const { form, route } = props;
  const { getFieldProps, getFieldValue } = form;
  const loadingEffect = useSelector((state: {loading: any}) => state.loading);
  const loading = loadingEffect.effects['user/fetchLogin'] || false;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <NavLeftButton leftTitle="取消" />,
    });
    if (route && route.params) {
      setParams(route.params);
    }
  }, [navigation]);

  const wechatLogin = () => {};

  const onGetCode = async () => {
    const phone = getFieldValue('phone');
    return await dispatch({
      type: 'user/fetchPhoneCode',
      payload: {
        phone,
      },
    });
  };

  const getFormConfig = () => {
    const phone = getFieldValue('phone');
    return {
      phone: {
        ...getFieldProps('phone', {
          trigger: 'onChange',
          rules: [
            {
              required: true,
              message: '请输入手机号',
            },
            {
              pattern: PHONE,
              message: '请输入正确手机号吗',
              transform(value: string) {
                return value && value.replace(/\s/g, '');
              },
            },
          ],
        }),
        type: 'phone',
        maxLength: 15,
        placeholder: '输入手机号（新手机号自动注册）',
      },
      vcode: {
        ...getFieldProps('vcode', {
          trigger: 'onChange',
          rules: [
            {
              required: true,
              message: '请输入验证码',
            },
          ],
        }),
        type: 'number',
        maxLength: 6,
        placeholder: '输入验证码',
        extra: (
          <SmsButton
            disabled={!phone || phone.length < 13}
            onGetCode={onGetCode}
          />
        ),
      },
    };
  };

  const formConfig = getFormConfig();

  const submit = () => {
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'user/fetchLogin',
          payload: {
            ...values,
          },
          params: params,
        });
        Keyboard.dismiss();
      } else {
        errorToast(err);
      }
    });
  };

  return (
    <View style={styles.warp}>
      <WhiteSpace />
      <WingBlank size="md">
        <InputItem {...formConfig.phone} />
        <InputItem {...formConfig.vcode} />
        <Button
          loading={loading}
          style={styles.button}
          type="primary"
          onPress={submit}>
          登录
        </Button>
      </WingBlank>
      <WechatLogin onPress={wechatLogin} />
      <LoginSignText />
    </View>
  );
};

export default createForm()(Login);
