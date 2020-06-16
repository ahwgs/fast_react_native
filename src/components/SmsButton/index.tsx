import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Counter from './count';

interface IProps {
  isStart?: boolean; // 是否直接获取
  onGetCode: any; // 获取验证码回调
  disabled?: boolean; // 是否禁止获取
}

export default ({ isStart = false, onGetCode, disabled = false }: IProps) => {
  const [showTime, setShowTime] = useState(false);

  const onGetCodeFun = async () => {
    if (disabled) {
      return;
    }
    if (onGetCode) {
      const res = await onGetCode();
      if (res) {
        setShowTime(true);
      }
    }
  };

  useEffect(() => {
    if (isStart && !disabled) {
      onGetCodeFun();
    }
  }, []);

  const showTimer = () =>
    showTime ? (
      <Counter
        onTimeEnd={() => {
          setShowTime(false);
        }}
      />
    ) : (
      <TouchableOpacity
        style={[styles.smsButtonContainer]}
        onPress={onGetCodeFun}>
        <Text
          style={[
            styles.smsButtonText,
            disabled ? styles.disabledContainer : {},
          ]}>
          获取验证码
        </Text>
      </TouchableOpacity>
    );

  return showTimer();
};
