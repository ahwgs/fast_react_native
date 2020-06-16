import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import styleUtil from '@/utils/styles';
import { Button, Toast } from '@ant-design/react-native';
import theme from '@/utils/theme';
import CheckBox from '@/components/CheckBox';
import { px2rem } from '@/utils/px2rem';
import { GoodsStatus } from '@/constant/commonConstant';
import { useNavigation } from '@react-navigation/native';

const BottomCalcCard = ({ totalList, list, onChange }) => {
  const navigation = useNavigation();

  // 所有正常状态的列表
  const allNormalList =
    totalList && totalList.filter(goods => goods.status === GoodsStatus.normal);
  const [checkAll, setCheckAll] = useState(false);

  const onCheckAllChange = e => {
    const { target } = e;
    const { checked } = target;
    setCheckAll(checked);
    onChange && onChange(checked ? allNormalList : []);
  };

  const calcPrice = () => {
    let price = 0;
    list.forEach(goods => {
      price += parseInt(goods.price, 10) * parseInt(goods.count, 10);
    });
    return price.toFixed(2) || '0.00';
  };

  useEffect(() => {
    if (allNormalList && allNormalList.length > 0 && list) {
      setCheckAll(allNormalList.length === list.length);
    }
  }, [list]);

  const onBuyAction = () => {
    if (!list || list.length === 0) {
      Toast.info('请先选择需要购买的商品');
      return;
    }
    navigation.navigate('OpenOrder');
  };

  return (
    <View style={styles.container}>
      <View style={[styleUtil.row, styles.left]}>
        <CheckBox checked={checkAll} onChange={onCheckAllChange}>
          <Text style={{ marginLeft: px2rem(5) }}>全选</Text>
        </CheckBox>
      </View>
      <View style={[styleUtil.row, styles.right]}>
        <View style={styles.priceV}>
          <View style={[styleUtil.row, styles.priceRow]}>
            <Text style={styles.priceTitle}>合计</Text>
            <Text style={styles.priceIcon}>￥</Text>
            <Text style={styles.price}>{calcPrice()}</Text>
          </View>
          <Text style={{ fontSize: theme.fontSizeXs }}>已免配送费</Text>
        </View>
        <View>
          <Button onPress={onBuyAction} style={styles.button} type="warning">
            <Text style={styles.buttonTxt}>去结算</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default BottomCalcCard;
