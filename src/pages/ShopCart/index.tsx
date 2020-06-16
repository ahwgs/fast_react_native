import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import NavigationBar from '@/components/NavigationBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useMount } from '@/hooks';
import { useDispatch, useSelector } from 'react-redux';
import CouponRow from './components/CouponRow';
// import BottomCalcCard from './components/BottomCalcCard';
// import PageFooter from '@/components/PageFooter';
import CustomFlatList from '@/components/CustomFlatList';
import CartCard from './components/CartCard';

const ShopCart = () => {
  const dispatch = useDispatch();

  const { couponList, loading } = useSelector(({ shopcart, loading }) => ({
    couponList: shopcart.couponList || [],
    selectList: shopcart.selectList || [],
    cartList: shopcart.cartList || [],
    loading:
      loading.effects['shopcart/fetchCouponList'] ||
      loading.effects['shopcart/fetchCartList'] ||
      false,
  }));

  // 获取优惠券列表
  const fetchCoupons = () => {
    dispatch({
      type: 'shopcart/fetchCouponList',
    });
  };

  // 获取购物车列表
  const fetchCartList = (page, limit) => {
    return dispatch({
      type: 'shopcart/fetchCartList',
      payload: {
        pageNum: page,
        pageSize: limit,
      },
    });
  };

  useMount(() => {
    fetchCoupons();
  });

  // const calcPriceChange = list => {
  //   dispatch({
  //     type: 'shopcart/save',
  //     payload: {
  //       selectList: list,
  //     },
  //   });
  // };

  const rightButton = (
    <TouchableOpacity style={styles.rightView}>
      <Text style={[styles.color, styles.delete]}>删除</Text>
    </TouchableOpacity>
  );

  const onFetch = async (page = 1, startFetch, abortFetch) => {
    try {
      let pageLimit = 10;
      const res = await fetchCartList(page, pageLimit);
      startFetch(res, pageLimit);
    } catch (err) {
      abortFetch();
    }
  };

  const renderItem = ({ item }) => {
    return <CartCard info={item} />;
  };

  return (
    <View style={styles.warpper}>
      <NavigationBar title="购物车" leading={null} trailing={rightButton} />
      <CouponRow list={couponList} />
      <CustomFlatList
        // contentContainerStyle={styles.list}
        onFetch={onFetch}
        // renderFooter={() => <PageFooter />}
        listStyle={{ height: 100 }}
        renderItem={renderItem}
        loading={loading}
      />

      {/* <BottomCalcCard
        onChange={calcPriceChange}
        totalList={cartList}
        list={selectList}
      /> */}
    </View>
  );
};

export default ShopCart;
