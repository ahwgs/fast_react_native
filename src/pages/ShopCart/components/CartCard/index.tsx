import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CartCard = props => {
  const { info } = props;
  const { title, id } = info;
  return (
    <View style={styles.card}>
      <Text>
        {title}
        {id}
      </Text>
    </View>
  );
};

export default CartCard;
