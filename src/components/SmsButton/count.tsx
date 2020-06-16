import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { useInterval } from '@/hooks';

interface IProps {
  tip?: any;
  onTimeEnd: any;
}

export default ({ onTimeEnd, tip }: IProps) => {
  const [count, setCount] = useState(60);
  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      onTimeEnd();
    }
  }, 1000);
  return (
    <View style={[styles.smsButtonContainer, { borderColor: '#7C808A' }]}>
      <Text style={[styles.smsButtonText, { color: '#7C808A' }]}>
        {tip ? tip(count) : `已发送(${count})`}
      </Text>
    </View>
  );
};
